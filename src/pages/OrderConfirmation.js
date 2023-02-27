import { useSelector } from "react-redux";
const OrderConfirmation=()=>{
    const productDetails=useSelector((state)=>state.cart.product);
    const paymentDetails=useSelector((state)=>state.payment.SelectedPayment);
    return(
        <div>
            
            <p>Products</p>
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
        <p>Payment to be done by <b>{paymentDetails}</b></p>
        
        </div>
    )
}
export default OrderConfirmation