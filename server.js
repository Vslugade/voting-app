//import express file
const express = require('express')
const app = express();
//import database file
const db = require('./db');
//import env file
require('dotenv').config();
//import bodyparser middleware
const bodyParser = require('body-parser'); 

//use bodyparser
app.use(bodyParser.json()); // req.body
//using port from env file or direct 3000
const PORT = process.env.PORT || 3000;

const{jwtAuthMiddleware} = require('./jwt');
// Import the router files
const userRoutes = require('./routes/userRoutes');
const candidateRoutes = require('./routes/candidateRoutes');

// Use the routers
app.use('/user', userRoutes);
app.use('/candidate',jwtAuthMiddleware, candidateRoutes);


//check server is live 
app.listen(PORT, ()=>{
    console.log('listening on port 3000');
})