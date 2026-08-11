const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');
const { authGuard } = require('../middleware/authMiddleware');

router.post('/login', authController.login);
router.post('/logout', authController.logout);
router.get('/me', authGuard, authController.getMe);

module.exports = router;