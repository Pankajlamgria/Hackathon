const mongoose=require('mongoose');
const {Schema}=mongoose;
const friendschema=new Schema({
    firstpersonUserid:{type:String,required:true},
    firstpersonImg:{type:String,default:"https://tse3.mm.bing.net/th?id=OIP.mCk87Fy_SgmscdbglwzhXwHaHa&pid=Api&P=0&h=180"},
    firstpersonUsername:{type:String,required:true},
    secondpersonUserid:{type:String,required:true},
    secondpersonImg:{type:String,default:"https://tse3.mm.bing.net/th?id=OIP.mCk87Fy_SgmscdbglwzhXwHaHa&pid=Api&P=0&h=180"},
    secondpersonUsername:{type:String,required:true},
})
module.exports=mongoose.model("friends",friendschema);
