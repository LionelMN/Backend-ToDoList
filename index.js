const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
mongoose.connect('mongodb://localhost:27017/todolist')

app.use(cors({ origin : true}  ));
app.use(express.json())

const todosRouter = require('./api/todos/todos.router')
app.use('/todos', todosRouter)

app.listen(5000)