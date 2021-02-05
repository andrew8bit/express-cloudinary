// 1 - Enviroment 
require('dotenv').config();
// 2 - Imports
const express = require('express');
const ejsLayouts = require('express-ejs-layouts');
const multer = require('multer');
const cloudinary = require('cloudinary');
const { urlencoded } = require('express');

// 3 - App Set Up
const app = express();
app.set('view engine', 'ejs');
// 4 - App Middleware
app.use(ejsLayouts);
app.use(urlencoded({extended: false})) // able to access req.body
// 5 - Routes
app.get('/', (req, res) => {
    res.send('Welcome to my Express Cloudinary App')
});

// Listen on PORT
const PORT = process.env.PORT || 8000;
app.listen(PORT, (req, res) => {
    console.log(`Server is jamming to PORT: ${PORT} 🎹`)
})