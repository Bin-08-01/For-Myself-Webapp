const router = require('express').Router();
const AuthController = require('../Controllers/AuthController');
const MiddlewareController = require("../Controllers/MiddlewareController");

router.post('/register', AuthController.registerUser);

router.post('/login',AuthController.loginUser);

router.post('/logout', MiddlewareController.verifyToken, AuthController.logoutUser);

module.exports = router;