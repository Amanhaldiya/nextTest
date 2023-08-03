///task
import { getResponseMessage } from "@/Use/responseMessage";
import { Task } from "@/models/task";
import { NextResponse } from "next/server";
import  jwt  from "jsonwebtoken";



//get all the task
export async function GET(request){
    try{
        const tasks=await Task.find();
        return NextResponse.json(tasks);
    }
    catch(error){
        console.log(error);
        return getResponseMessage("error in getting data",404,false);
    }
}



//create all the tasks
export async function POST(request){
     const {title,content,userId,status}=await request.json();
     //fetching logged in user id
     const token=request.cookies.get("logintoken")?.value;
  //   console.log(token);
     const data=jwt.verify(token,process.env.JWT_KEY="whegfrkwuywuefrygweuiaeou");
    // console.log(data);
     console.log(data._id);
    try{
        const task=new Task({
            title,
            content,
            userId:data._id,
            status,
         
        });
    
    const createdTask=await task.save(); 
    return NextResponse.json(createdTask,{
        message:"Yeah",
        status:201,
    })
    }
catch(error)
{
       console.log (error);
       return NextResponse.json({
        message:"Task not created",
        success:false,
           
})}
       }






