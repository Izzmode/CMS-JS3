const router = require('express').Router();
const { addProduct, getProducts, getProductById, updateProduct, deleteProduct } = require('../models/productModel');
const { verifyToken, checkAdmin } = require('../authentication/auth')


// Create
router.post('/', addProduct);

// Read
router.get('/', getProducts);
router.get('/:id', getProductById);

// Update
router.put('/:id', updateProduct);

// Delete
router.delete('/:id', deleteProduct);

module.exports = router;
