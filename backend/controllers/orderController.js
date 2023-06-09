const router = require('express').Router();
const { addOrder, getOrderById, getOrdersByUser, updateOrder, getOrders } = require('../models/orderModel');
const { verifyToken, checkAdmin } = require('../authentication/auth')

// Create
// router.post('/', verifyToken, addOrder)
router.post('/', addOrder)

// router.post('/add/:id', addToExistingOrder)

// Read
router.get('/', getOrders)
router.get('/:id', getOrderById)
router.get('/user/:id', getOrdersByUser)

//Update
router.put('/:id', updateOrder);


module.exports = router;
