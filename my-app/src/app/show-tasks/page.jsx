"use client";
import React, { useContext, useEffect, useState } from "react";
import UserContext from "../context/userContext";
import Task from "./Task";
import { deleteTask,  geTaskUser } from "@/services/Taskservices";
import { toast } from "react-toastify";



const ShowTasks=()=>{



    const [tasks,setTasks]=useState([]);
    const context =useContext(UserContext);
    async function loadTasks(userId)
    {
            try{
                const tasks=await geTaskUser(userId);
                setTasks([...tasks].reverse());
                console.log(tasks);
            }
            catch(error){
               console.log(error); 
            }
    }


    useEffect(()=>{
      if(context.user){
        loadTasks(context.user._id);
      }
    },[context.user],);

    async function deleteTaskuser(tasksId){
     try{
      
      const result=await deleteTask(tasksId);
      console.log(result);
      const newTasks=tasks.filter((item)=>item._id!=tasksId);
      setTasks(newTasks);
      
     toast.success("Your task is deleted");
     }
    catch(error){
      console.log(error);
      toast.error("Error in deleting!!");
    }
    
    }
    return (
        <div className=" grid grid-cols-12 mt-3">
        
        <div className="col-span-6 col-start-4">
        <h1 className="text-3xl mb-2">Your tasks({tasks.length})</h1>
        {tasks.map((task)=>(
            <Task task={task} key={task._id} deleteTaskuser={deleteTaskuser}/>
        ))}
        
        </div>
        
        
        </div>
    )
};







export default ShowTasks;
