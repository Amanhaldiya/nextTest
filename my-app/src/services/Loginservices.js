import { httpAxios } from "@/Use/httpaxios";

export async function loginUp(task){
    const result=await httpAxios.post("/api/task",task).then((response)=>response.data);
    



    return result;
}