const express = require('express');
const router = express.Router();
const ProductController = require('../controllers/productController.js');

router.get('/', ProductController.listProduct);

router.post('/', ProductController.addProduct);
router.get('/:productId', ProductController.getOneProduct);
router.put('/:productId', ProductController.editProduct);
router.delete('/:productId', ProductController.deleteProduct);

module.exports = router;