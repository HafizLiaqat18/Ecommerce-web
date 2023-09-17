import React from "react";
export default function Error({mesg}){
    return(
        <>
        <div className=" container d-flex flex-column justify-content-center text-center m-auto"  style={{width:"100%" , margin:"auto" , height:"65vh"}}>
            
            <i style={{fontSize:"6rem"}} className="text-danger fa-solid fa-triangle-exclamation"></i>
            <h1 style={{fontSize:"4rem"}}>{"Error"}</h1>

            
        </div>
        </>
    )
}