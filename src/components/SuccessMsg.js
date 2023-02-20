import { useState,useEffect } from "react";
const SuccessMsg=(props)=>{
    const [msg,setMsg] = useState("");
    const [status,setStatus] = useState();

useEffect(()=>{
    
        if (props.status === 200) {
            setStatus("Status : "+props.status);
            setMsg("Message : API CALL IS SUCCESSFULL !!!");
        }else{
            setStatus("Status : "+props.status)
            setMsg("Message : API CALL IS UNSUCCESSFULL !!!");
            console.log(props.status)
        }     
    },[props.status])


return(
    <h1>
        {status}<br/>
        {msg}
    </h1>
);
}
export default SuccessMsg