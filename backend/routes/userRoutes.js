const router = require('express').Router();
const User = require('../models/userModel');
const userController = require('../controllers/userController')

router.route('/add')
    .post(userController.addUser)

router.route('/')
    .get(userController.renderAllUsers)


module.exports = router;