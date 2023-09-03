"use client";
import React, { useState } from "react";
import {toast} from "react-toastify";
import loginsvg from "../../assests/login.svg";
import Image from "next/image";
import { SignUp } from "@/services/Userservices";

  const Signup=()=>{
   const [data,setdata]= useState({
        name:"",
        email:"",
        password:"",
        about:"",
        profileURL:""
    });
    const handleAddTask=async (event)=>{
        event.preventDefault();
        console.log(event.target);
        console.log(data);
       // validate task data 
       if(data.name.trim()=="" ||data.name==null){
        toast.warning("Name is required", {position:"top-center"});
        return;
       }

        try{
            const result= await SignUp(data)
            console.log(result);
            toast.success("User is registered" ,{position:"top-center" });
            setdata({
                name:"",
                email:"",
                password:"",
                about:"",
                profileURL:""
            })
        }


       catch(error){
        console.log(error);
        toast.error("Sign up error !!" + error.response.data.message ,{position:"top-center"});
      
       }
    
      };
      const resetForm=()=>{
        setdata({ 
            name:"",
            email:"",
            password:"",
            about:"",
            profileURL:""
        })

        }
  
    return(
        <div className="grid grid-cols-12 justify-center">
            <div className="border col-span-4 col-start-5 p-5">
    
            <div className="my-8 flex justify-center">
                <Image src={loginsvg} alt="login" style={{
                    width:"50%",
                    
                }}
                />
            </div>
            <h1 className="text-2xl text-center">
                Sign up here
            </h1>
            <form action="#" onSubmit={handleAddTask}>
                <div className="mt-4">
        <label htmlFor="username" className="block text-sm font-medium mb-2">Username</label>
                <input type="text" 
                 className="w-full p-3 rounded-3xl bg-blue-200 focus:ring-blue-400-100 border border-gray-800" 
                 id="username"
                 name="username"
                 onChange={(event)=>{
                    setdata({
                        ...data,
                        name:event.target.value,
                    });
                 }}
                 value={data.name}
                 />
                
                </div>
                <div className="mt-4">
                    
        <label htmlFor="email" className="block text-sm font-medium mb-2">Email</label>
                <input type="email" className="w-full p-3 rounded-3xl bg-red-200 focus:ring-gray-400-100 border
                 border-gray-800" id="email " 
                 email="useremail"
                 onChange={(event)=>{
                    setdata({
                        ...data,
                        email:event.target.value,
                    });
                 }}
                 value={data.email}
                 />
                </div>
                <div>
                <label htmlFor="password" className="block text-sm font-medium mb-2">Password</label>
                <input type="password" className="w-full p-3 rounded-3xl bg-blue-200 focus:ring-gray-400-100 border
                 border-gray-800" id="password " 
                 name="password"
                 onChange={(event)=>{
                    setdata({
                        ...data,
                        password:event.target.value,
                    });
                 }}
                 value={data.password}
                 />
                </div>
                <div>
                <label htmlFor="task_content" className="block text-sm font-medium mb-2">About</label>
                <textarea type="textarea" className="w-full p-3 rounded-3xl bg-red-200 focus:ring-gray-400-100 border
                 border-gray-800" id="task_content row-5" 
                 name="password"
                 onChange={(event)=>{
                    setdata({
                        ...data,
                        about:event.target.value,
                    });
                 }}
                 value={data.about}
                 />
                </div>
              
              
            
                
               
                <div className="mt-4 flex justify-center">
                <button className="bg-blue-500 py-2 px-3 rounded-lg hover:bg-blue-800">Sign up</button>
                <button className="bg-red-500 py-2 px-3 rounded-lg hover:bg-red-800 ms-3" onClick={resetForm}>Clear</button>
            </div>
            {
               // JSON.stringify({data})
            }
            </form>
            </div> 
            </div>
       
    );}



export default Signup;
