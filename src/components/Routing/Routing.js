import { Route,Routes } from "react-router-dom";
import ProductList from "../../pages/ProductList";
import FifthTask from "../FifthTask/FifthTask";
import FirstTask from "../FirstTask/FirstTask";
import FourthTask from "../FourthTask/FourthTask";
import SecondTask from "../SecondTask/SecondTask";
import ThirdTask from "../ThirdTask/ThirdTask";
import Cart from "../../pages/Cart";
import Payment from "../../pages/Payment";
import OrderConfirmation from "../../pages/OrderConfirmation";
const Routing=(props)=>{
return(
<Routes>
    <Route path={props.path} element={<FirstTask/>}/>
    <Route path="/secondTask" element={<SecondTask/>}/>
    <Route path="/thirdTask" element={<ThirdTask/>}/>
    <Route path="/fourthTask" element={<FourthTask/>}/>
    <Route path="/fifthTask" element={<FifthTask/>}/>
    <Route path="/productList" element={<ProductList/>}/>
    <Route path="/cartItems" element={<Cart/>}/>
    <Route path="/paymentType" element={<Payment/>}/>
    <Route path="/orderConfirmation" element={<OrderConfirmation/>}/>
</Routes>
)
}
export default Routing