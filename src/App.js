import FirstTask from "./components/FirstTask/FirstTask";
import SecondTask from "./components/SecondTask/SecondTask";
import ThirdTask from "./components/ThirdTask/ThirdTask";
import FourthTask from "./components/FourthTask/FourthTask";
import useTimer from "./useTimer";
import { useState } from "react";

function App() {
let limit=10;
const {timer,startTimer} = useTimer();
const [display,setDisplay]=useState(false);

return (
  
<div>
{/* <FirstTask/> */}
{/* <SecondTask/> */}
{/* <ThirdTask/> */}
{/* <FourthTask/> */}
<div>
<h1>Timer Limit Upto : {limit}</h1>

{display && <p>{timer}</p>}
<button onClick={()=>{
    startTimer(limit);
    setDisplay(true);}}>ShowTimer</button>
</div>
</div>
  
);
}

export default App;
