const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

//Middlewares
app.use(cors());
app.use(bodyParser.json());

//Import Routes
const postsRoute = require('./routes/posts');

app.use('/posts', postsRoute);

//ROUTES
app.get('/', (req, res) => {
    res.send('We are on home');
});



//Connect to DB
mongoose.connect('mongodb://localhost:27017/rest', () => {
    console.log('connect to DB!')
});

//How to we start listening to the server
app.listen(3000);