import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import { User } from "@/models/user";
import  jwt  from "jsonwebtoken";
export async function POST(request){
    const{email,password}=await request.json()




  
    try{
        //1.get user
   const user=await User.findOne({
        email:email,
       
    });
    if(user==null){
        throw new Error("user not found");
    }
    //2.match password
   const matched=bcrypt.compareSync(password,user.password);
   if(!matched){
    throw new Error ("Password not matched");
   }
   //3.generate token
    const token=jwt.sign({
        _id:user._id,
        name:user.name
    
    },process.env.JWT_KEY="whegfrkwuywuefrygweuiaeou");

    //4.CREATE nextresponse cookie
    const response= NextResponse.json({
        message:"login success!!",
        success:true,
        user:user
    });
    response.cookies.set("logintoken",token,{
        expiresIn:"1d",
        httpOnly:true
    });


    return response;
    console.log(user);
    console.log(token);
    return NextResponse.json(
        {message:"user found",
        success:true
        },{status:200}
    )
    }

    catch(error)
    {
        return NextResponse.json(
            {message:error.message,
            success:false
            },{status:500}
        )
    }


}