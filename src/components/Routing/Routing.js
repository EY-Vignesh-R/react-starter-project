import { Route,Routes } from "react-router-dom";
import FifthTask from "../FifthTask/FifthTask";
import FirstTask from "../FirstTask/FirstTask";
import FourthTask from "../FourthTask/FourthTask";
import SecondTask from "../SecondTask/SecondTask";
import ThirdTask from "../ThirdTask/ThirdTask";
const Routing=(props)=>{
return(
<Routes>
    <Route path={props.path} element={<FirstTask/>}/>
    <Route path="/secondTask" element={<SecondTask/>}/>
    <Route path="/thirdTask" element={<ThirdTask/>}/>
    <Route path="/fourthTask" element={<FourthTask/>}/>
    <Route path="/fifthTask" element={<FifthTask/>}/>
</Routes>
)
}
export default Routing