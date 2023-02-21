import { useState } from "react";
const TitleList=(props)=>{

return(
    <ul>
        {
            props.resp.map((x)=>{
            return(
            <li key={x.id}>{x.title}</li>
            );
        }) 
        }
        
    </ul>
    
)
    
}
export default TitleList