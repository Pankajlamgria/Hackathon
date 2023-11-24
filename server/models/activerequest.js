const mongoose=require('mongoose');
const {Schema}=mongoose;
const activeRequestSchema=new Schema({
    fromusername:{type:String,required:true},
    fromimgurl:{type:String,default:"https://tse3.mm.bing.net/th?id=OIP.mCk87Fy_SgmscdbglwzhXwHaHa&pid=Api&P=0&h=180"},
    fromuserid:{type:String,required:true},
    touserid:{type:String,required:true},
    toimgurl:{type:String,default:"https://tse3.mm.bing.net/th?id=OIP.mCk87Fy_SgmscdbglwzhXwHaHa&pid=Api&P=0&h=180"},
    tousername:{type:String,required:true},
})
module.exports=mongoose.model("activerequest",activeRequestSchema);
