const mongoose = require('mongoose');

const todoSchema = mongoose.Schema({

    owner : {
        type: String,
        required: true
    },

    title : {
        type: String,
        required: true
    },

    details : {
        type: String
    },

    date : {
        type : String,
        default: () => Date.now()
    },
    completed : {
        type : Boolean,
        default: () => false
    },
})
