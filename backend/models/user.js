const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    username:{
        type: String,
        require: true,
        minLength: 6,
        unique: true,
    },
    password:{
        type: String,
        require: true,
        minLength: 6,
    },
    email:{
        type: String,
        require: true,
        minLength: 6,
        unique: true,
    },
    admin:{
        type: Boolean,
        default: false
    },
}, {timestamps: true});

module.exports = mongoose.model("User", UserSchema);