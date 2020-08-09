const express = require('express');
const router = express.Router();
var controller = require('../controllers/user.controller');

router.get('/', controller.index);
router.post('/', controller.postCreate);

module.exports  = router