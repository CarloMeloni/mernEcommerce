const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
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

//MIDDLEWARES
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(cookieParser());

//ROUTES MIDDLEWARE
app.use('/api', userRoutes);

const port = process.env.PORT || 8000;

app.listen(port, () => { console.log(`Server is running on port ${port}`) });