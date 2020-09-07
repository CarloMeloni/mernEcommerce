const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();

//APP
const app = express();

//DATABASE
mongoose.connect(process.env.DATABASE, {
    useNewUrlParser: true,
    useCreateIndex: true
}).then(() => { console.log('DATABASE CONNECTED!') });

//ROUTES
app.get('/', (req, res) => {
    res.send('Server working outdatedddd!!!')
});

const port = process.env.PORT || 8000;

app.listen(port, () => { console.log(`Server is running on port ${port}`) });