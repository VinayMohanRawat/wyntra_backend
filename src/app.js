require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const PORT =  process.env.PORT || 3000;
const route = require('./routes/index');
const connectDb = require('./database/db');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Acess-Control-Allow-Method', 'GET, POST, PUT, DELETE, OPTIONS');
    res.header('Access-Conrol-Allow-Headers', 'Content-Type');
    next()
})

app.use('/', route);

connectDb();

app.listen(PORT, () => {
    console.log(`Express is running on PORT ${PORT}`);
})