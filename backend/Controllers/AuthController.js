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
            {expiresIn: '30m'}
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

    requestRefreshToken: async(req, res)=>{
        const refreshToken = req.cookies.refreshToken;
        if (!refreshToken) return res.status(401).json("You're not authenticated");
        if (!refreshTokens.includes(refreshToken)) {
            return res.status(403).json("Refresh token is not valid");
        }
        jwt.verify(refreshToken, process.env.KEY_REFRESH_TOKEN, (err, user) => {
            if (err) {
                console.log(err);
            }
            refreshTokens = refreshTokens.filter((token) => token !== refreshToken);
            const newAccessToken = AuthController.generateAccessToken(user);
            const newRefreshToken = AuthController.generateRefreshToken(user);
            refreshTokens.push(newRefreshToken);
            res.cookie("refreshToken", refreshToken, {
                httpOnly: true,
                secure:false,
                path: "/",
                sameSite: "strict",
            });
            res.status(200).json({
                accessToken: newAccessToken,
                refreshToken: newRefreshToken,
            });
        });
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
            let user = await User.findOne({ username: req.body.username });
            if(!user){
                res.status(404).json("Not found this user");
            }
            else{
                const validPassword = await bcrypt.compare(
                    req.body.password,
                    user.password
                )
                if(!validPassword){
                    res.status(404).json("Wrong password");
                }
                const accessToken = await AuthController.generateAccessToken(user);
                const refreshToken = await AuthController.generateRefreshToken(user);
                res.cookie("refreshToken", refreshToken, {
                    httpOnly: true,
                    secure: false,
                    path: '/',
                    sameSite: "strict",
                })
                res.status(200).json({user, accessToken});
            }
        }catch(err){
            console.log(err);
        }
    },

    logoutUser: async (req, res)=>{
        res.clearCookie("refreshToken");
        res.status(200).json("Logged out successfully!");
    }
}

module.exports = AuthController;