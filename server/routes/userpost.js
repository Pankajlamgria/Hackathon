const express=require('express');
const router=express.Router();
const fetchuser=require("../fetchuser.js");
const post=require('../models/post.js');
const auth=require('../models/auth.js');
const friends=require("../models/friend.js");

router.post("/addpost",fetchuser,async(req,res)=>{
    const userid=req.userid;
    const bodydata=req.body;
    try{
        const userdetial=await auth.findById(userid);
        
        const postdetails=await post.create({
            userprofile:userdetial.profileurl,
            username:bodydata.username,
            userid:userid,
            docurl1:bodydata.picurl1,
            docurl2:bodydata.picurl2,
            docurl3:bodydata.picurl3,
            docurl4:bodydata.picurl4,
            videourl:bodydata.videourl,
            post:bodydata.post
        })
        res.json({success:true,postdetails});
    }
    catch(error){
        res.json({success:false,error});
    }
});
router.get("/myposts",fetchuser,async(req,res)=>{
    const userid=req.userid;
    let success=false;
    try{
        const alluserposts=await post.find({userid:userid});
        if(alluserposts){
            res.json({success:true,alluserposts});
        }
        else{
            res.json({success:true,alluserposts:[]});
        }
    }
    catch(error){
        res.json({success,error});
    }
})
router.delete("/deletemypost/:postid",fetchuser,async(req,res)=>{
    const postid=req.params.postid;
    const userid=req.userid;
    try{
        const oldpost=await post.findById(postid);
        if(!oldpost){
            res.json({success:false,error:"no post exist"});
        }
        else if(oldpost.userid==userid){
            const deletedpost=await post.findByIdAndDelete(postid);
            res.json({success:true,deletedpost});
        } 
        else{
            res.json({success:false,error:"access not allowed."});
        }
    }
    catch(error){
        res.json({success:false,error});
    }
})
router.get("/user/:userid",async(req,res)=>{
    const userid=req.params.userid;
    let success=false;
    try{
        const alluserposts=await post.find({userid:userid});
        if(alluserposts){
            res.json({success:true,alluserposts});
        }
        else{
            res.json({success:true,alluserposts:[]});
        }
    }
    catch(error){
        res.json({success,error});
    }
})
router.get("/homeposts",fetchuser,async(req,res)=>{
    const userid=req.userid;
    const friendslist1=await friends.find({firstpersonUserid:userid});
    const friendslist2=await friends.find({secondpersonUserid:userid});
    let allpostslist=[];
    const mainfriendlist=friendslist1.concat(friendslist2);
    // console.log(mainfriendlist);
    for (let i=0;i<mainfriendlist.length;i++){
        if(mainfriendlist[i].firstpersonUserid===userid){
            const friendspost=await post.find({userid:mainfriendlist[i].secondpersonUserid});
            for (let j=0;j<3 && j<friendspost.length;j++){
                allpostslist.push(friendspost[j]);
            }
        }
        else if(mainfriendlist[i].secondpersonUserid===userid){
            let friendspost=await post.find({userid:mainfriendlist[i].firstpersonUserid});
            for (let j=0;j<2 && j<friendspost.length;j++){
                allpostslist.push(friendspost[j]);
            }
        }
    }
    allpostslist=allpostslist.sort(() => Math.random() - 0.5);
    res.json({success:true,allpostslist});
})

module.exports=router;
