import { NextResponse } from 'next/server'
import { NextRequest } from 'next/server'
// This function can be marked `async` if using `await` inside
export function middleware(request) {




    console.log("middleware executed");
    const token=request.cookies.get("logintoken")?.value;
    if(request.nextUrl.pathname==='/api/Login'||request.nextUrl.pathname==='/api/user'){
      return;
    }


    const loggesInUserNotAccessPaths=request.nextUrl.pathname==="/login"||request.nextUrl.pathname=="/sign-up";
    //not acceesing secured route 
    if(loggesInUserNotAccessPaths){
      if(token){
     return  NextResponse.redirect(new URL("/profile/user",request.url));
    }
  }
  else{
    //accessing secured route
    if(!token){
      return NextResponse.redirect(new URL("/login",request.url));
    }
    if(!token){
      return NextResponse.json({
        message:"access denied",
        success:false,
      },{status:401,}
      )
    }
  }

    console.log(token);
 //   return NextResponse.redirect(new URL('/home', request.url))
}
 
// See "Matching Paths" below to learn more
export const config = {
  matcher:["/","/login","/sign-up","/add-task","/show-tasks","/profile/:path*","/api/Login" ],
}