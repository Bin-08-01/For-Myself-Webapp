const mongoose = require('mongoose');

const vocabularySchema = new mongoose.Schema({
    language: {
        type: String,
        require: true,
    },

    original: {
        type: String,
        require: true,
        unique: true,
    },

    translate: {
        type: String,
        require: true,
    },

    description: {
        type: String,
    },

    marked: {
        type: Boolean,
        default: false
    },

    wordType: {
        type: String,
        default: "",
    },

    group: {
        type: String,
    },

    idUser: {
        type: String,
        require: true
    }
}, {timestamps: true});

module.exports = mongoose.model("vocabulary", vocabularySchema);