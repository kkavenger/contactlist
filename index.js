const express = require('express');
const mongoose = require('mongoose');

//starting server with express
const app = express();

//connection to mongodb
mongoose.connect('mongodb://localhost/todolist');

//middleware
app.use(express.urlencoded());
app.use(express.static("./public"));

//setting view engine
app.set('view engine', 'ejs');
// app.set('views', path.join(__dirname, 'views'));

//routes
app.use(require('./routes/home'))
app.use(require('./routes/todos'))


app.listen(3000,() => {console.log('listening on port 3000')});