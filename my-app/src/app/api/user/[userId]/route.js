import About from "@/app/about/page";
import { User } from "@/models/user";
import { NextResponse } from "next/server";






//export const Get=()=>{}
export async function GET(request,{params}){
    const{userId}=params;
    const user=await User.findById(userId).select("-password");
    return NextResponse.json(user);
}



export async function DELETE(request,{params})
{
//console.log(params);



const {userId}=params;

try{
    await User.deleteOne({
        _id:userId,
    });

//const userId=params.userId;                     //destructure
                                                 //const {userId,title}=params;   
//console.log("user id",userId);                    //console.log("userId",userId);

//console.log

    return NextResponse.json({
        message:"User Deleted",
        success:true,
     });
}
    catch(error){
        console.log(error)
        return NextResponse.json({
           
            message:"Error Deleted",
            success:false,
         });
    }
}
export async function PUT(request,{params}){
    const {userId}=params;
   const{name,password,about,profileURL}= await request.json();
try{
    const user=await User.findById(userId);
    user.name=name;
    user.about=about;
    user.password=password;
    user.profileURL=profileURL;
    const updateUser=await user.save();
    return NextResponse.json(updateUser,{message:"user Updated"});


}
catch(error){
    return NextResponse({
        message:"user not updated", 
        success:false,
    });
}



}