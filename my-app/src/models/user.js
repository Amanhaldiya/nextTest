import mongoose, { Schema } from "mongoose";







const UserShcema=new Schema({
    name:String,
    email:{
        type:String,
        unique:true,
        required:[true,"Email Required"],
      

    },
 password:{
    type:String,
    require:[true,"password required"],
 },


 about:String,
 profileURL:String,


});


export const User=mongoose.models.users||mongoose.model("users",UserShcema);