const express = require('express');
const app = express();
const mongoose = require('mongoose');

//Import Routes
const postRoute = require('./routes/posts');

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