const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
mongoose.connect('mongodb://localhost:27017/todoList')

app.use(cors({ origin : true}  ));
app.use(express.json())

app.listen(5000)