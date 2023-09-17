import React from "react";
export default function Loader() {
  return (
    <>
    <div className="text-center m-auto"  style={{width:"100%" , margin:"auto" , height:"100vh"}}>

      <div className="spinner-border text-danger h5 " role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
    </div>
    </>
  );
}
