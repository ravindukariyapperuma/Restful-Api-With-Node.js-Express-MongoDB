const express = require('express');
const app = express();
const mongoose = require('mongoose');

//ROUTES
app.get('/', (req, res) => {
    res.send('We are on home');
});

app.get('/posts', (req, res) => {
    res.send('We are on posts');
});

//Connect to DB
mongoose.connect('mongodb://localhost:27017/rest', () => {
    console.log('connect to DB!')
});

//How to we start listening to the server
app.listen(3000);