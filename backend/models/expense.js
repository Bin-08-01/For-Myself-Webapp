const mongoose = require('mongoose');

const ExpenseSchema = new mongoose.Schema({
    dateAdd:{
        type: String,
        require: true,
        default: Date.now(),
    },
    reason:{
        type: String,
        require: true,
    },
    cost:{
        type: Number,
        require: true,
    },
    typeAdd:{
        type: Boolean,
        require: true,
    }
});

module.exports = mongoose.model("expense", ExpenseSchema);