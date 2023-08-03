
async function taketime(){
    await new Promise((resolve)=>{
        setTimeout(resolve,3000);
    })
}




export default async function About(){
    await taketime();
    throw new Error("this is manual error");
    return(
        <div>

        <h1>This is about Route</h1>
        </div>
    )


} 