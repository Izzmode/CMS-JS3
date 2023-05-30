const router = require('express').Router();
const { addOrder, getOrderById, getOrdersByUser, getOrderByUserAsAdmin, getOrders } = require('../models/orderModel');
const { verifyToken, checkAdmin } = require('../authentication/auth')

// Create
// router.post('/', verifyToken, addOrder)
router.post('/', addOrder)

// router.post('/add/:id', addToExistingOrder)

// Read
router.get('/', getOrders)
router.get('/:id', getOrderById)
router.get('/user/:id', getOrdersByUser)


module.exports = router;
