import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
const Cart=()=>{
const productDetails=useSelector((state)=>state.cart.product);
console.log(productDetails);
return(
    <div>
        <h2>Cart Items</h2>
        <ol>
            
            {productDetails.map((x)=>{
                return(
                    <li key={x.id}>
                    <ul>
                        <li>{x.product.productName}</li>
                        <li>Rs {x.product.productPrice}</li>
                    </ul>
                    </li>
                )
            })}
            
        </ol>
        <button><Link style={{textDecoration: 'none'}} to={"/paymentType"}>Continue</Link></button>
    </div>
)
}
export default Cart