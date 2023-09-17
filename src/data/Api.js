// import React,{useState} from "react";


export default async function getApi (ApiUrl){
        let response = await fetch(`https://fakestoreapi.com/${ApiUrl}`);
        return response;
        
}