const { url } = require("inspector");
const mongoose=require("mongoose");
const {Schema}=mongoose;
const postschema=new Schema({
    userid:{type:Schema.Types.ObjectId,ref:"username",required:true},
    docurl1:{type:String,required:true},
    docurl2:{type:String},
    docurl3:{type:String},
    docurl4:{type:String},
    videourl:{type:String},
    username:{type:String},
    date:{type:Date,default:Date.now},
    post:{type:String},
    userprofile:{type:String,require:true}
})
module.exports=mongoose.model("post",postschema);