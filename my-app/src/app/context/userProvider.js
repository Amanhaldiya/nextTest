"use client"
import React, { useEffect, useState } from "react";
import UserContext from "./userContext";
import { toast } from "react-toastify";
import { CurrentUser } from "@/services/Userservices";
const UserProvider=({children})=>{
    const [user,setUser]=useState(undefined);


 useEffect( ()=>{ 
    async function fetchData() {
    try{
  const currentUser= await CurrentUser();
  console.log(currentUser);
  setUser({...currentUser});
     }
 catch(error){
     console.log(error);
  //   toast.error("error in loding current user");
     setUser(undefined);
 } 
 }fetchData();
},[]);

    return (
    <UserContext.Provider value={{user ,setUser}}>
        {children}
    </UserContext.Provider>
    
    );
};
export default UserProvider;