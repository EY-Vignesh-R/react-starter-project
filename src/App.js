import Child from './components/Child';
import Users from './components/Users';
import Admin from './components/Admin';
import { useState } from "react";

function App() {
const [ubuttn,setUbuttn]=useState(false)
const [abuttn,setAbuttn]=useState(false)

  const users = [
    { id: 1, name: "Virat",age:18,gender:'M',email_id:"alice@gmail.com" },
    { id: 2, name: "Sachin",age:24,gender:'M',email_id:"sachin@gmail.com" },
    { id: 3, name: "Messi",age:30,gender:'M',email_id:"messi@gmail.com" },
    { id: 4, name: "Saina",age:35,gender:'F',email_id:"saina@gmail.com" },
    { id: 5, name: "Ronaldo",age:40,gender:'M',email_id:"ronaldo@gmail.com" }
  ];
  const admins = [
    { id: 1, name: "Rajesh",admin_email_id:"rajesh@gmail.com",password:"raj@123" },
    { id: 2, name: "Pradeep",admin_email_id:"pradep@gmail.com",password:"pra@123" }
  ];

const showUsers=()=>setUbuttn(true)
const showAdmins=()=>setAbuttn(true)

  return (
  <div> 

  {/* <Child date={new Date().toString()}/>
  <Child date={new Date().toString()}/>
  <Child date={new Date().toString()}/>
  <Child date={new Date().toString()}/>
  <Child date={new Date().toString()}/> */}

  {ubuttn && <Users user_details={users}/>}
  <br/>
  {abuttn && <Admin admin_details={admins}/>} 

<button onClick={showUsers} className="move">Show Users</button>
<button onClick={showAdmins} className="move">Show Admins</button>

</div>
   
  );
}

export default App;
