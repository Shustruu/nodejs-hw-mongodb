const express = require('express');
const router = express.Router();
const ctrlWrapper = require('../utils/ctrlWrapper');
const { validateBody } = require('../middlewares/validateBody');
const { registerSchema, loginSchema } = require('../utils/authValidationSchemas');
const { register, login, refresh, logout } = require('../controllers/auth');

// POST /auth/register - реєстрація користувача
router.post('/register', validateBody(registerSchema), ctrlWrapper(register));

// POST /auth/login - логін користувача
router.post('/login', validateBody(loginSchema), ctrlWrapper(login));

// POST /auth/refresh - оновлення токенів
router.post('/refresh', ctrlWrapper(refresh));

// POST /auth/logout - вихід користувача
router.post('/logout', ctrlWrapper(logout));

module.exports = router;
