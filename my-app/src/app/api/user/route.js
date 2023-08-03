import { connectDb } from "@/Use/db";
import { User } from "@/models/user";
import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";




connectDb();
export async function GET(request){



    let user=[];
    try{
      user=await User.find().select("-password");

    }
    catch(error)
    {
   console.log(error);
   return NextResponse.json({
    message:"failed to get users",
    success:false,
   });
    }
  
   // const users=[{
    //    name:'User',
      //  phone:'2525',
   //     course:'java',
   // },
 //   {
    //   name:'User',
    //    phone:'2525',
    //    course:'C',
   // },
  //  {
   //     name:'User',
    // //   phone:'2525',
     //   course:'python',
  //  }//



//]
return NextResponse.json(user);
}








export async function POST(request){
//fetch user detail from request
const {name,email,password,about,profileURL}= await request.json()
console.log({name,email,password,about,profileURL});

//create user object with user model
const user=new User({
    name,
    email,
    password,
    about,
    profileURL,
});
try{
  user.password=await bcrypt.hash(user.password,parseInt(process.env.Password_SALT));
const createUser=await user.save();
const response=NextResponse.json(user,{status:201,});
return response;
}
catch(error){
    console.log(error);
    return NextResponse.json({
        message:"failed to create user",
        status:false,
    },{
      status:500,
    })
   
}
}


 //const jsondata= await request.json();
// console.log(jsondata);
 // const textdata=await request.text();
 // console.log(textdata);
  
    /* const body=request.body;
    console.log(body);
    console.log(request.method);
    console.log(request.nextUrl.pathname);
    console.log(request.nextUrl.searchParams);
    // console.log(request.cookies);
   // console.log(request.headers);*/
 //   return NextResponse.json({
 //  message:"hosting user data ",

//})
  //  const users=[{
     //   phone:'2525',
     ///   course:'python',
//    }]
//}





//not worked here
//export function DELETE(request){
 //console.log("delete api called");
// return NextResponse.json({
   // message:'deleted',
  //  status:true,


 //},{status:201,statusText:"yeah text changed"});

//}



//export function PUT(){


//}