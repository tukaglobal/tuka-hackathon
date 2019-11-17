const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const User = require('../models/users');

router.post('/signUp', async(req,res)=> {
    const password = req.body.password;
    const hashedPassword = bcrypt.hashSync(password, bcrypt.genSaltSync(10));
    req.body.password = hashedPassword;
    try {
        const createdUser = await User.create(req.body);
        req.session.userId = createdUser._id;
        req.session.email = createdUser.email
        req.session.logged = true;

        res.json({data:createdUser})
        console.log(createdUser)
    } catch (error) {
        console.log(error)
    }
})

module.exports = router;