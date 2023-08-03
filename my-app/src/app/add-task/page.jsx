"use client";
import React, { useState } from "react";
import {toast} from "react-toastify";
import loginsvg from "../../assests/login.svg";
import Image from "next/image";
import { addTask } from "@/services/Taskservices";
export const metadata={
    title:"Add Task:Work Manager "
}
const AddTask=()=>{
    document.title=metadata.title;
 const[task,setTask]= useState({
    title:"",
    content:"",
    status:"",
    //temporary solution
    userId:"64aed8b50ea457b6b36fdf20",
  });
  const handleAddTask=async (event)=>{
    event.preventDefault();
    console.log(event.target);
    console.log(task);
   // validate task data 





    try{
        const result= await addTask(task)
        console.log(result);
        toast.success("your Task is added" ,{position:"top-center" });
        setTask({
            title:"",
            content:"",
           status:"none"
        })
    }
   catch(error){
    console.log(error);
    toast.error("task not added",{position:"top-center"});
  
   }

  };
  
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
                Add task component
            </h1>
            <form action="#" onSubmit={handleAddTask}>
                <div className="mt-4">
        <label htmlFor="task_title" className="block text-sm font-medium mb-2">Title</label>
                <input type="text" 
                 className="w-full p-3 rounded-3xl bg-red-200 focus:ring-gray-400-100 border border-gray-800" 
                 id="task_title"
                 name="task_title"
                 onChange={(event)=>{
                    setTask({
                        ...task,
                        title:event.target.value,
                    });
                 }}
                 value={task.title}
                 />
                
                </div>
                <div className="mt-4">
                    
        <label htmlFor="task_content" className="block text-sm font-medium mb-2">Content</label>
                <textarea type="text" className="w-full p-3 rounded-3xl bg-blue-300 focus:ring-gray-400-100 border
                 border-gray-800" id="task_content row-5" 
                 name="task_content"
                 onChange={(event)=>{
                    setTask({
                        ...task,
                        content:event.target.value,
                    });
                 }}
                 value={task.content}
                 
                 
                 
                 />
                </div>
                <div className="mt-4">
                    <label htmlFor="task_status "className="block text-sm font-medium mb-2">
                     Status
                    </label>
                <select id="task_status"className="w-full p-3 rounded-3xl bg-red-200 focus:ring-gray-400-100 border
                 border-gray-800" 
            
                 name="task_status"
                 onChange={(event)=>{
                    setTask({
                        ...task,
                        status:event.target.value,
                    });
                 }}
                 value={task.status}
                 
                 
                 >
                    <option value=""  disabled>------Select Status------- </option>
                <option value="Pending">
                Pending
                </option>
                <option value="completed">Completed</option>
                </select>

                </div>
                <div className="mt-4 flex justify-center">
                <button className="bg-blue-500 py-2 px-3 rounded-lg hover:bg-blue-800">Add Task</button>
                <button className="bg-red-500 py-2 px-3 rounded-lg hover:bg-red-800 ms-3">Clear</button>
            </div>
            {
                JSON.stringify({task})
            }
            </form>
            </div>

           
            </div>
       
    );

}


export default AddTask;