// init project
const express = require("express");
const session = require('express-session');
const bodyParser = require('body-parser');
const cors = require('cors');


const app = express();
const PORT = process.env.PORT || 3030;

const userRouter = require('./controller/user');

require('dotenv').config();
require('./db/db');

// const api = require('./api');
const tracksRouter = require('./controller/tracks')



app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(session({
  secret: 'asdf',
  resave: false,
  saveUninitialized: false
}));


const corsOptions = {
  origin: ['http://localhost:3000'],
  credentials: true, 
  optionsSuccessStatus: 200,
};

app.use(cors(corsOptions));

app.use('/user',userRouter);
app.use('/tracks',tracksRouter)

// listen for requests :)
app.listen(PORT, (err) => {
  console.log(err || `Your app is listening on port ${PORT}`);
});

