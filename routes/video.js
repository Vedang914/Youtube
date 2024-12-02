const express = require('express');
const router = express.Router();
const videoController = require("../controllers/video");
const auth = require('../middleware/auth');

router.post('/video', auth, videoController.uploadVideo);

router.get('/allVideo',videoController.getAllVideo);
router.get('/getVideoById/:id',videoController.getVideoById);
router.get('/:userId/channel',videoController.getAllVideoByUserID);


module.exports = router;