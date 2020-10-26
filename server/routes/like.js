const express = require('express');
const router = express.Router();
const { Like } = require("../models/Like")
const { Dislike } = require("../models/Dislike")




router.post('/getlikes', (req,res)=>{

    let variable = {}
    if(req.body.videoId){
        variable = {videoId:req.body.videoId}
    }else{
        variable = {commentId:req.body.commentId} 
    }

    Like.find(variable)
        .exec((err,like) => {
            if(err) return res.status(400).send(err)
            return res.status(200).json({success:true,like})
        })
})



router.post('/getdislikes', (req,res)=>{

    let variable = {}
    if(req.body.videoId){
        variable = {videoId:req.body.videoId}
    }else{
        variable = {commentId:req.body.commentId} 
    }

    Like.find(variable)
        .exec((err,dislike) => {
            if(err) return res.status(400).send(err)
            return res.status(200).json({success:true,dislike})
        })
})



router.post('/uplike', (req,res)=>{

    let variable = {}
    if(req.body.videoId){
        variable = {videoId:req.body.videoId, userId:req.body.userId}
    }else{
        variable = {commentId:req.body.commentId ,userId:req.body.userId} 
    }

    
    const like = new Like(variable)
    like.save((err,likeResult) => {
        if(err) return res.status(400).json({success:false,err})
    })

    Dislike.findOneAndDelete(variable)
        .exec((err,dislikeReuslt) => {
            if(err) return res.status(400).json({success:false,err})
            return res.status(200).json({success:true,dislikeReuslt})
        })
})


router.post('/unlike', (req,res)=>{

    let variable = {}
    if(req.body.videoId){
        variable = {videoId:req.body.videoId, userId:req.body.userId}
    }else{
        variable = {commentId:req.body.commentId ,userId:req.body.userId} 
    }


    Dislike.findOneAndDelete(variable)
    .exec((err,likeResult) => {
        if(err) return res.status(400).json({success:false,err})
        return res.status(200).json({success:true,likeResult})
    })
})


router.post('/updislike', (req,res)=>{

    let variable = {}
    if(req.body.videoId){
        variable = {videoId:req.body.videoId, userId:req.body.userId}
    }else{
        variable = {commentId:req.body.commentId ,userId:req.body.userId} 
    }

    const dislike = new Dislike(variable)
    dislike.save((err,dislike)=> {
        if(err) return res.status(400).send(err)
    })

    Like.findOneAndDelete(variable)
        .exec((err,like) => {
        if(err) return res.status(400).send(err)
        return res.status(200).json({success:true,like})
    })
})



router.post('/undislike', (req,res)=>{

    let variable = {}
    if(req.body.videoId){
        variable = {videoId:req.body.videoId, userId:req.body.userId}
    }else{
        variable = {commentId:req.body.commentId ,userId:req.body.userId} 
    }

   
    Dislike.findOneAndDelete(variable)
        .exec((err,like) => {
        if(err) return res.status(400).send(err)
        return res.status(200).json({success:true,like})
    })
})








module.exports = router;
