import mongoose from "mongoose";
import { User } from "@/models/user";
//C:\Users\Amanh\OneDrive\Desktop\java folder\nextjs\my-app\src\app\mongo.env
export const connectDb=async()=>{
    try{




   const { connection }  = await mongoose.connect(process.env.MONGO_DB_URL="mongodb+srv://amanhaldiya512:Aman512@cluster0.4lmdeee.mongodb.net/",{
   dbName:"work_manager",




   });
    console.log("db connected.........");
    //console.log(connection);
    //testing and creating user new user
    

    
     const users= new User({
        name:"test name",
        email:"test@gmail.com",
        password:"testpassword",
        about:"testing",
      });
      await users.save();
      console.log("User Created");

    
    }
    catch(error)
    {
      console.log("failed to connect with database");
      console.log(error);

    }
    
}