const express = require('express');
const router = express.Router();
const path = require('path');
const userController = require('../controllers/userController');
const usersValidations = require('../validations/usersValidations');



router.get('/', userController.create);
router.post('/',usersValidations,userController.store);




module.exports = router;
