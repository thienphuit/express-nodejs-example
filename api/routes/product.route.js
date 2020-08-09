const express = require('express');
const router = express.Router();
const controller = require('../controllers/product.controller');

router.get('/', controller.getProduct);

router.post('/', controller.postProduct);
router.put('/:id', controller.putProduct);

module.exports  = router;