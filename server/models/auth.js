const mongoose=require('mongoose');
const {Schema}=mongoose;
const authschema=new Schema({
    username:{type:String,required:true},
    email:{type:String,required:true},
    password:{type:String,required:true},
    phoneNumber:{type:Number,required:true},
    gender:{type:String,required:true},
    profileurl:{type:String,default:"https://tse3.mm.bing.net/th?id=OIP.mCk87Fy_SgmscdbglwzhXwHaHa&pid=Api&P=0&h=180"}
})
module.exports=mongoose.model("username",authschema);