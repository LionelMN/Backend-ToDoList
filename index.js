const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
mongoose.connect('mongodb://localhost:27017/todolist')

app.use(cors({ origin : true}  ));
app.use(express.json())

const todosRouter = require('./api/todos/todos.router')
app.use('/todos', todosRouter)

const usersRouter = require('./api/users/users.router')
app.use('/users', usersRouter)

const auth = require("./api/auth/auth.router")
app.use('/', auth)

app.listen(5000)