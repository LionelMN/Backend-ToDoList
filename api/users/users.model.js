const mongoose = require('mongoose');

const userSchema = mongoose.Schema({

    username: {
        type: String,
        required : true,
        unique: true,
    },

    password: {
        type: String,
        required : true,
    },

    todos: [
        {
            type : mongoose.Schema.Types.ObjectId,
            ref: 'todo',
        }
    ]
});

const userModel = mongoose.model('user', userSchema);

module.exports = userModel;