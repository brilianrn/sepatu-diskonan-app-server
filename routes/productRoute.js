const express = require('express');
const router = express.Router();
const ProductController = require('../controllers/productController.js');
const { authentication, authorization } = require('../middlewares/auth.js');

router.get('/', ProductController.listProduct);

router.use(authentication);
router.post('/', ProductController.addProduct);
router.get('/:productId', authorization, ProductController.getOneProduct);
router.put('/:productId', authorization, ProductController.editProduct);
router.delete('/:productId', authorization, ProductController.deleteProduct);

module.exports = router;