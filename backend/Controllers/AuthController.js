const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../models/user');

let refreshTokens = [];

const AuthController = {
    generateAccessToken: async (user)=>{
        return jwt.sign(
            {
                id: user.id,
                admin: user.admin
            },
            process.env.KEY_ACCESS_TOKEN,
            {expiresIn: '30s'}
        )
    },

    generateRefreshToken: async (user)=>{
        return jwt.sign(
            {
                id: user.id,
                admin: user.admin,
            },
            process.env.KEY_REFRESH_TOKEN,
            {expiresIn: "30d"}
        )
    },

    registerUser: async(req, res)=>{
        try{
            //Hash password
            const salt = await bcrypt.genSalt(10);
            const hashed = await bcrypt.hash(req.body.password, salt);

            //Create a new user
            const newUser = await new User({
                username: req.body.username,
                email: req.body.email,
                password: hashed,
            });

            //Add to DB
            const user = await newUser.save();
            res.status(200).json(user);
        }catch(err){
            res.status(500).json(err);
        }
    },

    loginUser: async (req, res)=>{
        try{
            const user = await User.findOne({ username: req.body.username });
            if(!user){
                res.status(404).json("Not found this user");
            }

            const validPassword = await bcrypt.compare(
                req.body.password,
                user.password
            )
            if(!validPassword){
                res.status(404).json("Wrong password");
            }
            const accessToken = await AuthController.generateAccessToken(user);
            const refreshToken = await AuthController.generateRefreshToken(user);

            refreshTokens.push(refreshToken);

            res.cookie("refreshToken", refreshToken, {
                httpOnly: true,
                secure: false,
                path: '/',
                sameSite: "strict",
            })
            res.status(200).json({message: "Login successfully", user, accessToken, refreshToken});
        }catch(err){
            console.log("Lỗi");
        }
    },

    logoutUser: async (req, res)=>{
        res.clearCookie("refreshToken");
        refreshTokens = refreshTokens.filter(token => token !== req.cookies.refreshToken);
        res.status(200).json("Logout successfully");
    }
}

module.exports = AuthController;