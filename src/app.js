const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const router = express.Router();

//Load routes
const indexRoute = require('./routes/index');
const productsRoute = require('./routes/products');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}));

app.use('/', indexRoute);
app.use('/products', productsRoute);



module.exports = app;