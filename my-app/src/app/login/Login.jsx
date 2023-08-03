"use client";
import React, { useContext, useState } from "react";
import loginsvg from "../../assests/login.svg";
import Image from "next/image";
import {toast} from "react-toastify";
import { loginUp } from "@/services/Loginservices";
import { login } from "@/services/Userservices";
import { useRouter } from "next/navigation";
import UserContext from "../context/userContext";






const Login=()=>{
    const router=useRouter();
    const context=useContext(UserContext);
    const [logindata,setlogindata]= useState({
       
        email:"",
        password:"",
      
    });
    const handleAddLogin=async (event)=>{
        event.preventDefault();
        console.log(event.target);
        console.log(logindata);
       // validate task data 
       if(logindata.email.trim()==="" ||logindata.password.trim()==""){
        toast.warning(" login data Required", {position:"top-center"});
        return;
       }
       try{
      const result= await login(logindata);
      console.log(result);
      toast.success("Logged In");
      //redirect
       context.setUser(result.user);
       router.push("/profile/user");
       }
       catch(error){
        console.log(error);
        toast.error("Error in login!!"+error.response.data.message,{
            position:"top-center",
        })
       }
    }
      const resetForm=()=>{
        setlogindata({ 
            
            email:"",
            password:"",
        
        })
    }
        
  
    return (
            <div className="grid grid-cols-12 justify-center">
                <div className="border col-span-4 col-start-5 p-5">
        
                <div className="my-8 flex justify-center">
                    <Image src={loginsvg} alt="login" style={{
                        width:"50%",
                        
                    }}
                    />
                </div>
                <h1 className="text-2xl text-center">
                    Login here
                </h1>
                <form action="#" onSubmit={handleAddLogin}>
          
                    <div className="mt-4">
                        
            <label htmlFor="email" className="block text-sm font-medium mb-2">Email</label>
                    <input placeholder="Enter here "type="email" className="w-full p-3 rounded-3xl bg-red-200 focus:ring-gray-400-100 border
                     border-gray-800" id="email " 
                     email="useremail"
                     onChange={(event)=>{
                        setlogindata({
                            ...logindata,
                            email:event.target.value,
                        });
                     }}
                     value={logindata.email}
                     />

                    </div>
                    <div>
                <label htmlFor="password" className="block text-sm font-medium mb-2">Password</label>
                <input type="password" className="w-full p-3 rounded-3xl bg-blue-200 focus:ring-gray-400-100 border
                 border-gray-800" id="password " placeholder="Enter here" 
                 name="password"
                 onChange={(event)=>{
                    setlogindata({
                        ...logindata,
                        password:event.target.value,
                    });
                 }}
                 value={logindata.password}
                 />
                </div>
                   
                <div className="mt-4 flex justify-center">
                <button className="bg-blue-500 py-2 px-3 rounded-lg hover:bg-blue-800">Login</button>
                <button className="bg-red-500 py-2 px-3 rounded-lg hover:bg-red-800 ms-3" onClick={resetForm}>Clear</button>
            </div>
            {
                //JSON.stringify({logindata})
            }
                    </form>
                    </div>
                     </div>
    )
                    }
                
export default Login;