const express = require('express');

const mongoose = require('mongoose');


require('dotenv').config();


// App
const app = express();
app.use(express.json());
app.use(express.urlencoded({extended: true}));




// Database
mongoose.connect(process.env.DATABASE_CONNECTION_STRING, {
    useUnifiedTopology: true,
    useFindAndModify: false,
    useNewUrlParser: true,
    useCreateIndex: true
});

const db = mongoose.connection;

db.on('connected', () => {
    console.log('Mongoose default connection is open');
});

db.on('error', err => {
    console.log(`Mongoose default connection has occured \n${err}`);
});

db.on('disconnected', () => {
    console.log('Mongoose default connection is disconnected');
});

process.on('SIGINT', () => {
    db.close(() => {
        console.log(
            'Mongoose default connection is disconnected due to application termination'
        );
        process.exit(0);
    });
});



// Load models
const Products = require('./models/products');


// Load routes
const indexRoutes = require('./routes/index-routes');
app.use('/', indexRoutes);




//apontando a url do controller
const productsRoutes = require('./routes/products-routes');
app.use('/products', productsRoutes);



module.exports = app;
