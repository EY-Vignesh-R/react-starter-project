import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
const OrderConfirmation = () => {
  const productDetails = useSelector((state) => state.cart.product);
  // const paymentDetails=useSelector((state)=>state.payment.SelectedPayment);
  const { state } = useLocation();
  return (
    <div>
      <h3>Products</h3>
      <ol>
        {productDetails.map((x) => {
          return (
            <li key={x.id}>
              <ul>
                <li>{x.product.productName}</li>
                <li>
                  Rs <b>{x.product.productPrice}</b>
                </li>
              </ul>
            </li>
          );
        })}
      </ol>
      <h3>Addres Details : </h3>
      <p>{state.addressInfo}</p>
      <h3>Coupon Code : </h3>
      <p>{state.couponInfo}</p>
      <p>
        Payment to be done by : <b>{state.pay}</b>
      </p>
      {/* <p>Payment to be done by : <b>{paymentDetails}</b></p> */}
    </div>
  );
};
export default OrderConfirmation;
