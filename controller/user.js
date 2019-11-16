const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const User = require('../models/users');

router.post('/register', async(req,res)=> {
    console.log(req.body, 'hello')
    try {
        
    } catch (error) {
        console.log(error)
    }
})

module.exports = router;