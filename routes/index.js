const express = require('express');
const router = express.Router();
const homeController = require('../controllers/homeController')

router.get('/',homeController.home);

router.get('/dog',homeController.dog)

// console.log('router loading')


module.exports = router;