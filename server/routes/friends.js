const express=require('express');
const jwt=require("jsonwebtoken");
const bcrypt=require("bcryptjs");
const router=express.Router();
const auth=require('../models/auth.js');
const friends=require("../models/friend.js");
const activeRequest=require("../models/activerequest.js");
const fetchuser = require('../fetchuser.js');
const activerequest = require('../models/activerequest.js');
const friend = require('../models/friend.js');
const SECRET=process.env.Secret;

router.get("/addfriendlist",fetchuser,async(req,res)=>{
    const userid=req.userid;
    console.log(userid);
    const myfriends1=await friends.find({firstpersonUserid:userid});
    const myfriends2=await friends.find({secondpersonUserid:userid});
    const myfriendslist=myfriends1.concat(myfriends2);
    console.log(myfriends1);
    const alluserlist=await auth.find({});
    const map1=new Map();
    map1.set(userid,1);
    for(let i=0;i<myfriendslist.length;i++){
        map1.set(myfriendslist[i].firstpersonUserid,1);
        map1.set(myfriendslist[i].secondpersonUserid,1);
    }
    const activeRequestlist1=await activeRequest.find({fromuserid:userid});
    const activeRequestlist2=await activeRequest.find({touserid:userid});
    const mainactiveRequestlist=activeRequestlist1.concat(activeRequestlist2);
    for(let i=0;i<mainactiveRequestlist.length;i++){
        map1.set(mainactiveRequestlist[i].fromuserid,1);
        map1.set(mainactiveRequestlist[i].touserid,1);
    }
    var newaddfriendlist=[];
    for(let i=0;i<alluserlist.length;i++){
        if(map1.get(alluserlist[i].id)===undefined){
            newaddfriendlist.push(alluserlist[i]);
        }
    }
    res.json({success:true,newaddfriendlist});
})
router.post('/sendRequest',fetchuser,async(req,res)=>{
    const bodydata=req.body;
    const myuserid=req.userid;
    try{
        const createactiveRequest=await activeRequest.create({
            fromusername:bodydata.fromusername,
            fromimgurl:bodydata.fromimgurl,
            fromuserid:myuserid,
            tousername:bodydata.tousername,
            toimgurl:bodydata.toimgurl,
            touserid:bodydata.touserid
        })
        res.json({success:true,createactiveRequest});
    }
    catch(error){
        res.json({success:false,error});
    }
})
router.post("/showMyRequests",fetchuser,async(req,res)=>{
    const myuserid=req.userid;
    try{
        const myfriendrequest=await activerequest.find({touserid:myuserid});
        res.json({success:true,myfriendrequest});
    }
    catch(error){
        res.json({success:false,error});
    }
})
router.post("/acceptRequest",async(req,res)=>{
    const bodydata=req.body;
    const requestdata=await activeRequest.findById(bodydata.requestid);
    const myfriend=await friends.create({
        firstpersonUserid:requestdata.fromuserid,
        firstpersonImg:requestdata.fromimgurl,
        firstpersonUsername:requestdata.fromusername,
        secondpersonImg:requestdata.toimgurl,
        secondpersonUserid:requestdata.touserid,
        secondpersonUsername:requestdata.tousername
    })
    const deleteddata=await activeRequest.findByIdAndDelete(bodydata.requestid);
    res.json({success:true,myfriend});
})
router.delete("/rejectRequest",async(req,res)=>{
    const bodydata=req.body;
    const deletedrequest=await activeRequest.findByIdAndDelete(bodydata.requestid);
    res.json({success:true,deletedrequest});
})

router.get("/myfriendlist",fetchuser,async(req,res)=>{
    const userid=req.userid;
    const friendslist1=await friends.find({firstpersonUserid:userid});
    const friendslist2=await friends.find({secondpersonUserid:userid});
    const mainfriendlist=friendslist1.concat(friendslist2);
    res.json({success:true,mainfriendlist});
})
module.exports=router;