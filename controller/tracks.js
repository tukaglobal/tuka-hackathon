// const express = require('express');
// const router = express.Router();

// router.get('/tracks', async (req, res) => {
//     try {
//         const foundTracks = await Tracks.find();
//         console.log(foundTracks, 'foundTracks')
//         res.json({
//             status: {
//                 code: 200,
//                 message: "Resources returned successfully"
//             },
//             data: foundTracks
//         })
//     } catch (error) {
//         console.log(error)
//         res.send(error)
//     }
// })

// module.exports = router;