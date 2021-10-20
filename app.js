const express = require("express");
const bodyParser = require("body-parser");
const cors= require("cors");

const app = express();
const {API_VERSION} = require('./config');

// Load routing
const authRoutes = require('./routes/auth');
const userRoutes = require('./routes/user');


app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());


// Configure Header HTTP
// TODO

//CORS
app.use(cors());

// Router basic
app.use(`/api/${API_VERSION}`, authRoutes);
app.use(`/api/${API_VERSION}`, userRoutes);

module.exports = app;

