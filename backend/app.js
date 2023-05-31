const express = require('express');
const cors = require('cors')
const app = express();

const corsOptions ={
    origin:'*', 
    credentials:true,            //access-control-allow-credentials:true
    optionSuccessStatus:200,
 }
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors(corsOptions))

app.use('/api/users', require('./controllers/userController'));
app.use('/api/products', require('./controllers/productController'));
app.use('/api/orders', require('./controllers/orderController'))

module.exports = app
