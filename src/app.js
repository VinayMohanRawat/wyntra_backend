require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose')

const app = express();
const PORT = process.env.PORT || 3000;
const route = require('./routes/index');
// const connectDb = require('./database/db');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Acess-Control-Allow-Method', 'GET, POST, PUT, DELETE, OPTIONS');
    res.header('Access-Conrol-Allow-Headers', 'Content-Type');
    next()
})

mongoose.connect(process.env.DATABASE_URL)
    .then(() => console.log('mongodb is connected'))
    .catch(err => console.log(err))

app.use('/', route);


app.listen(PORT, () => {
    console.log(`Express is running on PORT ${PORT}`);
})