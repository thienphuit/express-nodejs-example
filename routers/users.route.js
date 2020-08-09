const express = require('express');
const router = express.Router();
const controller = require('../controllers/user.controller');
const validate = require('../vadidates/user.vadidate');

router.get('/',controller.index);

router.get('/create',controller.create);

router.post('/cteate',controller.postCreate);

module.exports = router;