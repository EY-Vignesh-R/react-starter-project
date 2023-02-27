import { useDispatch,useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { addPayment } from "../store/products/paySlice";
const Payment=()=>{
    const paymentsList = [
        { id: 1, paymentName: "Cash" },
        { id: 2, paymentName: "Debit Card" },
        { id: 3, paymentName: "Credit Card" },
        { id: 4, paymentName: "UPI" },
        { id: 5, paymentName: "No-Cost EMI" },
      ];
      const dispatch = useDispatch();
      const addPaymentHandler=(paym)=>{
      dispatch(addPayment(paym));
      }
      const paymentDetails=useSelector((state)=>state.payment.SelectedPayment);
      return (
        <div>
          <h1>Payment Types</h1>
          <ol>
            {paymentsList.map((x) => {
              return (
                <li key={x.id}>
                  <ul>
                    <li><b>{x.paymentName}</b></li>
                    <input type="radio" name="option" onClick={()=>{addPaymentHandler(x.paymentName);}}/>
                  </ul>
                </li>
              );
            })}
          </ol>
          <p>Payment Type Chosen : {paymentDetails}</p>
          <button><Link style={{textDecoration: 'none'}} to={"/orderConfirmation"}>Place Order</Link></button>
        </div>
    
      );
}
export default Payment