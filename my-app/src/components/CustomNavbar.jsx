"use client"
import UserContext from "@/app/context/userContext";
import { Logout } from "@/services/Userservices";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useContext } from "react";
import { toast } from "react-toastify";
const CustomNavbar=()=>{
    console.log("this is testing");




    const context=useContext(UserContext);
    const router=useRouter();
    console.log(context);
    async function doLogout(){
        try{
            const result=await Logout();
            console.log(result);
            context.setUser(undefined);
            router.push("/");
        }
        catch(error){
            console.log(error);
            toast.error("Logged out error");
        }
    }


    return (
        
        <nav className="bg-blue-300 h-15 py-2 px-25 flex justify-between items-center ">
         <div className="brand ">
      <h1 className="container col-span-3 text-2xl font-semibold"><a href="#">Work manager</a></h1>
        </div>
        <div>
         <ul className="flex space-x-5">
            {
                context.user && (
                    <>
                    <li>
              <Link href={'/'} className="hover:text-blue-200">Home</Link>
            </li>
            <li>
            <Link href={'/add-task'}>Add Task</Link>
            </li>
            <li>
            <Link href={'/show-tasks'}>Show Task</Link>
            </li>
                    
                    </>
                )
            }
            
         </ul>
        </div>
        <div>
         <ul className="flex space-x-5">
         {
            context.user && (
                <>
                   <li>
               <a href={"#"}>{context.user.name}</a>
            </li>
            <li>
            <button onClick={doLogout}>Log out</button>
            </li>
                
                </>
            )

         }
         {
            !context.user &&
            <>
            
               <li>
               <a href="/login">Login</a>
            </li>
            <li>
            <Link href={'/sign-up'}>Sign Up</Link>
            </li>
            
            </>
         }


            </ul>       
        </div>
        </nav>
    )
}

export default CustomNavbar;