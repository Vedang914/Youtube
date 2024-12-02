const Comment = require('../models/comment');



exports.addComment = async(req,res)=>{
    try{
        const {video,message} = req.body
        const comment = new Comment({user:req.user._id,video,message})
        await comment.save()

        res.status(201).json({
            success:true,
            comment
        })

    } catch (error){
        res.status(500).json({ error: 'Server error' });
    }
};

exports.getCommentByVideoId = async(req,res)=>{
    try{
        const {videoId} = req.params;
        const comments = await Comment.find({video:videoId})

        res.status(201).json({
            success:true,
            comments
        })

    } catch (error){
        res.status(500).json({ error: 'Server error' });
    }
}