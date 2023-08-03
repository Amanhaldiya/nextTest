import React, { useContext } from "react";
import UserContext from "../context/userContext";
import {RxCross1} from "react-icons/rx";
import { deleteTask } from "@/services/Taskservices";
const Task=({task,deleteTaskuser})=>{
    const {user}=useContext(UserContext);


    function deleteTask(taskId){
        
      deleteTaskuser(taskId);
    }
    return (
        <div className={` shadow-lg mt-2 rounded-md ${task.status=="completed"?"bg-green-200":"bg-blue-200"}`}>
        <div className="p-5">
          <div className="flex justify-between">
          <h1 className="text-2xl font-semibold">
              {task.title}
            </h1>
            <span onClick={()=>{
                deleteTask(task._id);
            }} className="shadow-lg hover:bg-pink-400 bg-blue-200 rounded-full w- h-5 flex justify-between items-center cursor-pointer">
            <RxCross1/>
          </span>
        
          </div>
            <p className="font-normal"> {task.content}</p>
         <div className="flex justify-between mt-3">
        
            <p className="text-left">
                Status: {""} <span className="font-bold">{task.status.toUpperCase()}</span></p>
            <p className="text-right">
            Author:<span className="font-bold">{user?.name}</span>
            </p>
         </div>
        </div>
        </div>
    
        );
};
export default Task;
const swalWithBootstrapButtons = Swal.mixin({
  customClass: {
    confirmButton: 'btn btn-success',
    cancelButton: 'btn btn-danger'
  },
  buttonsStyling: false
})

swalWithBootstrapButtons.fire({
  title: 'Are you sure?',
  text: "You won't be able to revert this!",
  icon: 'warning',
  showCancelButton: true,
  confirmButtonText: 'Yes, delete it!',
  cancelButtonText: 'No, cancel!',
  reverseButtons: true
}).then((result) => {
  if (result.isConfirmed) {
    swalWithBootstrapButtons.fire(
      'Deleted!',
      'Your file has been deleted.',
      'success'
    )
  } else if (
    /* Read more about handling dismissals below */
    result.dismiss === Swal.DismissReason.cancel
  ) {
    swalWithBootstrapButtons.fire(
      'Cancelled',
      'Your imaginary file is safe :)',
      'error'
    )
  }
})