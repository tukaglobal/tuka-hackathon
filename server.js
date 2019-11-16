// init project
const express = require("express");
const session = require('express-session');
const bodyParser = require('body-parser');
const cors = require('cors');
const fs = require('fs');
const utils = require('./utils');

const app = express();
const PORT = process.env.PORT || 3030;

require('dotenv').config();




const userRouter = require('./controller/user');
// const api = require('./api');

//requiring mongo database
require('./db/db');


app.use(session({
  secret: 'asdf',
  resave: false,
  saveUninitialized: false
}));
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


const corsOptions = {
  origin: ['http://localhost:3000'],
  credentials: true, 
  optionsSuccessStatus: 200,
};

app.use(cors(corsOptions));



app.use('/user',userRouter);

// listen for requests :)
app.listen(PORT, () => {
  console.log(`Your app is listening on port ${PORT}`);
});

