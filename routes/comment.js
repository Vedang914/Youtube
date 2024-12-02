const express = require('express');
const router = express.Router();
const CommentController = require('../controllers/comment');
const auth = require('../middleware/auth');


router.post('/comment',auth,CommentController.addComment);
router.get('/comment/:videoId',CommentController.getCommentByVideoId);


module.exports = router;