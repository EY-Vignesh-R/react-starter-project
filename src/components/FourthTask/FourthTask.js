import { useState } from "react";

const FourthTask=()=>{
    const [formInfo,setFormInfo]=useState(
        {
            nameData:"",
            emailData:"",
            msgData:""
        }
    );
   

    const changeFormInfo=(event)=>{
        setFormInfo((oldFormInfo)=>({
            ...oldFormInfo,
            [event.target.name]:event.target.value,
        }))
    }

    const submitFormData=(event)=>{
        event.preventDefault();
        console.log(formInfo);
        setFormInfo({
            nameData:"",
            emailData:"",
            msgData:""
        });
        
    }
    const validateForm=()=>{
        let valid=false;
        let regex=/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
                    if(regex.test(formInfo.emailData) === true){
                            valid=true;      
                    }else{
                            valid=false;
                            
                    }
        console.log(valid);
        return valid;    
    }

return(
    <form onSubmit={submitFormData}>
        <div>
        <label><b>Name : </b></label>
        <input type="text" value={formInfo.nameData} onChange={changeFormInfo} name="nameData"  />
        </div>
        <br/>
        <div>
        <label><b>Email ID : </b></label>
        <input type="text"value={formInfo.emailData} onChange={changeFormInfo} name="emailData"/>
        </div>
        <br/>
        <div>
        <label><b>Your Message : </b></label>
        <textarea value={formInfo.msgData} onChange={changeFormInfo} name="msgData"/>
        </div>
        <button type="submit" disabled=
        {
             !(formInfo.nameData && formInfo.emailData && formInfo.msgData && validateForm()) 

            }>Submit</button>
        
    </form>
)
}
export default FourthTask

