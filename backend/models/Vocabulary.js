const mongoose = require('mongoose');

const vocabularySchema = mongoose.Schema({
    original:{
        type: String,
        require: true,
        unique: true,
    },

    translate:{
        type: String,
        require: 
    }
})