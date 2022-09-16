const User = require("../models/user");

const UserController = {
    getAllUser: async (req, res)=>{
        try{
            const allUser = await User.find();
            res.status(200).json(allUser);
        }catch(err){
            res.status(500).json(err);
        }
    },
    
    deleteUser: async (req, res)=>{
        try{
            await User.findByIdAndDelete(req.params.id);
            res.status(200).json("Delete successfully");
        }catch(err){
            res.status(500).json(err);
        }
    },
}

module.exports = UserController;