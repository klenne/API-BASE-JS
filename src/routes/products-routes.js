const express = require('express');
const router = express.Router();


const productsController = require('../controllers/products-controller');

router.get('/', productsController.listProducts);
router.get('/:id', productsController.getById);

router.post('/', productsController.createProduct);

router.put('/:id', productsController.updateProduct);

router.delete('/:id', productsController.deleteProduct);


module.exports = router;