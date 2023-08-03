//api/tasks/{taslId}

import { getResponseMessage } from "@/Use/responseMessage";
import { Task } from "@/models/task";
import { NextResponse } from "next/server";




export async function GET(request,{params}){
    const {taskId}=params;




    try{
        const task=await Task.findById(taskId);
        return NextResponse.json(task);
    }catch(error)
    {    console.log(error);
        return getResponseMessage("error in message",500,false);
    }

}




export async function POST(){
    
}

export async function PUT(request,{params}){
    try{
        const {taskId}=params;
        const {title,content,status}=await request.json();
        let task=await Task.findById(taskId);
    (task.title=title),(task.content=content),(task.status=status);
    const updatedTask=await task.save();
    return NextResponse.json(updatedTask);
    
    }
    catch(error){
        console.log(error);
    return getResponseMessage("error in updating task",500,false);
    }
    
}





export async function DELETE(request,{params}){
    try{
        const {taskId}=params;
        await Task.deleteOne({
           _id:taskId,
         });
     return getResponseMessage("task deleted",200,true);
    
        }
    catch(error){
        return getResponseMessage("error in deleting message",500,false);
    }
}