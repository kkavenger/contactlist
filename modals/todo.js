const mongoose = require('mongoose');

const todoschema = new mongoose.Schema({

    todo : {
        type : String,
        required : true,
    },
});

const todo = mongoose.model('todo', todoschema);
module.exports = todo;