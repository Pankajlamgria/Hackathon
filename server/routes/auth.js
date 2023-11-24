const express=require('express');
const jwt=require("jsonwebtoken");
const bcrypt=require("bcryptjs");
const router=express.Router();
const auth=require('.././models/auth.js');
const { rmSync } = require('fs');
const fetchuser = require('../fetchuser.js');
const SECRET=process.env.Secret;


router.post("/signin",async(req,res)=>{
    const bodydata=req.body;
    let success=false;
    if(bodydata.username===""||bodydata.email===""||bodydata.password==""||bodydata.email===0||bodydata.gender===""){
        res.json({success,error:"Invalid user details."});
    }
    else if(bodydata.username.length<=2||bodydata.password.length<=5||bodydata.email.length<=4){
        res.json({success,error:"Minimum length required for Password is 5 and minimum length requried for email is 4."});
    }
    else {
        const finduser=await auth.findOne({email:bodydata.email});
        if(finduser){
            res.json({success,error:"Account already exist by this email address."});
        }
        else{
            try{
                const salt=await bcrypt.genSalt(10);
                const strongpswd=await bcrypt.hash(bodydata.password,salt);
                const createuser=await auth.create({
                    username:bodydata.username,
                    email:bodydata.email,
                    password:strongpswd,
                    phoneNumber:bodydata.phoneNumber,
                    gender:bodydata.gender,
                    profileurl:bodydata.profileurl
                })
                const token={
                    user:{id:createuser.id}
                }
                const authtoken=jwt.sign(token,SECRET);
                console.log(authtoken);
                success=true;
                res.json({success,authtoken,createuser});
            }
            catch(error){
                res.json({success,error});
            }
        }
    }
})
router.post("/login",async(req,res)=>{
    const bodydata=req.body;
    let success=false;
    if(bodydata.email===""||bodydata.password===""){
        res.json({success,error:"Invalid user Details"});
    }
    else{
        const finduser=await auth.findOne({email:bodydata.email});
        if(!finduser){
            res.json({success,error:"Account with this email does not exists."});
        }
        else{
            try{
                const result=await bcrypt.compare(bodydata.password,finduser.password);
                if(result){
                    const token={
                        user:{id:finduser.id}
                    }
                    const authtoken=jwt.sign(token,SECRET);
                    success=true;
                    res.json({success,authtoken,finduser});
                }
                else{
                    res.json({success,error:"Incorrect Details"});
                }
            }
            catch(error){
                res.json({success,error:error});
            }

        }
    }
})
router.post('/editDetails',fetchuser,async(req,res)=>{
    const id=req.userid;
    try{
        const bodydata=req.body;
        const newdata={
            username:bodydata.username,
            phoneNumber:bodydata.phoneNumber
        }
        const updatedData=await auth.findByIdAndUpdate(id,{$set:newdata});
        const newupdatedData=await auth.findById(id);
        res.json({success:true,newupdatedData});
    }
    catch(error){
        res.json({success:false,error});
    }
})
router.get("/userdetail",fetchuser,async(req,res)=>{
    try{
        const id=req.userid;
        const userdetails=await auth.findById(id).select("-password");
        if(userdetails){
            res.json({success:true,userdetails});
        }
        else{
            res.json({success:false,error:"Server Not responding"});
        }
    }
    catch(error){
        res.json({success:false,error});
    }
})
router.delete("/deleteaccount",fetchuser,(async(req,res)=>{
    const id=req.userid;
    const useraccount=await auth.findById(id);
    try{
        if(useraccount){
            const deletedaccount=await auth.findByIdAndDelete(id);
            res.json({success:true,deletedaccount});
        }
        else{
            res.json({success:false,error:"account did not exists"});
        }
    }
    catch(error){
        res.json({success:false,error:"Sever Error occured."});
    }
}))
router.get("/searchuser",async(req,res)=>{
    const bodydata=req.body;
    const result=await auth.find({username:bodydata.username});
    res.json({success:result});
})

module.exports=router;