const express = require('express');
const router = express.Router();
const Tracks = require('../models/tracks')

router.get('/', async (req, res) => {
    console.log(req.body, 'hello')
    try {
        const foundTracks = await Tracks.find();
        res.json({
            status: {
                code: 200,
                message: "Resources returned successfully"
            },
            data: foundTracks
        })
    } catch (error) {
        console.log(error)
        res.send(error)
    }
})

module.exports = router;