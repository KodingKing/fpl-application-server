const express = require('express');
const {
    getUser,
    checkUser,
    addUser
} = require('../controllers/userController');

const router = express.Router();
router.get('/user/:id', getUser);
router.post('/user/check', checkUser);
module.exports = {
    routes: router
}