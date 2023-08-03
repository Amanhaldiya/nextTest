import { NextResponse } from "next/server";
import jwt from "jsonwebtoken";
import { User } from "@/models/user";
export async function GET(request){
    const token=request.cookies.get("logintoken")?.value;
    console.log(token);
    const data=jwt.verify(token,process.env.JWT_KEY="whegfrkwuywuefrygweuiaeou");
    console.log(data);
    const user=await User.findById(data._id).select("-password");
    
    return NextResponse.json(user);
    




}