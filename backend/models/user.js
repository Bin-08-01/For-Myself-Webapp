const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    username:{
        type: String,
        require: true,
        minLength: 6,
        unique: true,
    },
    fullname:{
        type: String,
        require: true,
    },
    urlImage: {
        type: String,
        default: "https://cdn4.iconfinder.com/data/icons/instagram-ui-twotone/48/Paul-18-512.png",
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