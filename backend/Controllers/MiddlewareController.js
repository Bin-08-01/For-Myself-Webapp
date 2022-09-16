const jwt = require('jsonwebtoken');

const MiddlewareController = {
    verifyToken: async (req, res, next)=>{
        const token = req.headers.token;
        if(token){
            const accessToken = token.split(" ")[1];
            jwt.verify(accessToken, process.env.KEY_ACCESS_TOKEN, (err, user)=>{
                if(err){
                    return res.status(403).json("Token is not valid");
                }
                req.user = user;
                next();
            })
        }
        else{
            res.status(403).json("You are not authenticated");
        }
    }
}

module.exports = MiddlewareController;