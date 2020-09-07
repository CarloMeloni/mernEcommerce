const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();
//ROUTES
const userRoutes = require('./routes/user');

//APP
const app = express();

//DATABASE
mongoose.connect(process.env.DATABASE, {
    useNewUrlParser: true,
    useCreateIndex: true
}).then(() => { console.log('DATABASE CONNECTED!') });

//ROUTES MIDDLEWARE
app.use('/api', userRoutes);

const port = process.env.PORT || 8000;

app.listen(port, () => { console.log(`Server is running on port ${port}`) });