const express = require('express');
const contactsRouter = require('./contacts.js');
const authRouter = require('./auth.js');

const router = express.Router();

router.use('/contacts', contactsRouter);
router.use('/auth', authRouter);

module.exports = router;
