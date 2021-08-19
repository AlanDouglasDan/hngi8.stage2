const express = require('express');
const bodyParser = require('body-parser');

require('dotenv').config();

const nodemailer = require('nodemailer');
const log = console.log;

const urlEncodedParser = bodyParser.urlencoded({ extended: false });

const app = express();

const PORT = process.env.PORT || 5000;

// set template engine
app.set('view engine', 'ejs');

// Middlewares
app.use(express.static('./assets'));
app.use(express.json());

app.get('/', (req, res) =>{
    res.render('resume');
});

app.post('/email', urlEncodedParser, (req, res) => {
    res.render('success', {data: req.body});
});

app.listen(PORT, ()=>{
    console.log(`server running on port: ${PORT}`);
});