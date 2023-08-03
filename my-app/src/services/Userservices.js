import { httpAxios } from "@/Use/httpaxios";

export async function SignUp(user1){
    const result=await httpAxios.post("/api/user",user1).then((response1)=>response1.data);
    



    return result;
}

export async function login(LoginData){
    const result =await httpAxios.post("/api/Login",LoginData).then((response)=>response.data);
    return result;
}







export async function CurrentUser(){
    const result =await httpAxios.get("/api/current").then((response)=>response.data);
    return result;
}


export async function Logout(){
    const result =await httpAxios.post("/api/Logout").then((response)=>response.data);
    return result;
}