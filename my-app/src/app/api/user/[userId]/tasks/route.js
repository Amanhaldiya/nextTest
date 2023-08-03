// localhost:3000/api/users/[userId]/tasks

import { getResponseMessage } from "@/Use/responseMessage";
import { Task } from "@/models/task"
import { NextResponse } from "next/server";

export async function GET(request,{params}){
    const {userId}=params;




    try{
        //get user using Id try this an alternative
        const tasks=await Task.find({
            userId:userId,
        });
        return NextResponse.json(tasks);
    }
    catch(error){
        console.log(error);
        return getResponseMessage("error in message",404,false)
    }
}