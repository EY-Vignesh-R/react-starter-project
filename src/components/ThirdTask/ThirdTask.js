import TitleList from "./TitleList";
import SuccessMsg from "./SuccessMsg";
import { useState,useEffect } from "react";
const ThirdTask=()=>{
  const [data,setData]=useState([]);
  const [status,setStatus]=useState();
  let url ="https://jsonplaceholder.typicode.com/posts";


useEffect(()=>{
  const fetchUrl =async()=>{
      const response=await fetch(url);
      const responseData=await response.json();
      setData(responseData); 
      setStatus(response.status) ;          
  }
  fetchUrl();
},[]);
return(
  <div>
  <SuccessMsg status={status}/>
  <TitleList resp={data}/>
  </div>
)
}
export default ThirdTask