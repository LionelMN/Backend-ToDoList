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

    createAt : {
        type : String,
        default: () => Date.now()
    },
    completed : {
        type : Boolean,
        default: () => false
    },
});

const todoModel = mongoose.model('todo', todoSchema);

module.exports = todoModel;