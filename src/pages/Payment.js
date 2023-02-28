import { useDispatch } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { addPayment } from "../store/products/paySlice";
import { useState } from "react";
const Payment = () => {
  const [pay, setPay] = useState("");
  const paymentsList = [
    { id: 1, paymentName: "Cash" },
    { id: 2, paymentName: "Debit Card" },
    { id: 3, paymentName: "Credit Card" },
    { id: 4, paymentName: "UPI" },
    { id: 5, paymentName: "No-Cost EMI" },
  ];
  const dispatch = useDispatch();
  const addPaymentHandler = (paym) => {
    dispatch(addPayment(paym));
    setPay(paym);
  };
  const navigate = useNavigate();
  const loc = useLocation();
  const [couponInfo, setCouponInfo] = useState("");
  const changeFormInfo = (event) => {
    setCouponInfo(event.target.value);
  };
  const navigatetoOrderConfirmation = () => {
    if (couponInfo != "") {
      navigate("/orderConfirmation", {
        state: {
          ...loc.state,
          couponInfo,
          pay,
        },
      });
    } else {
      alert("Coupoun Code Not Entered !!!");
    }
  };
  return (
    <div>
      <h1>Payment Types</h1>
      <ol>
        {paymentsList.map((x) => {
          return (
            <li key={x.id}>
              <ul>
                <li>
                  <b>{x.paymentName}</b>
                </li>
                <input
                  type="radio"
                  name="option"
                  onClick={() => {
                    addPaymentHandler(x.paymentName);
                  }}
                />
              </ul>
            </li>
          );
        })}
      </ol>
      <label>Coupon Code :</label>
      <br />
      <input value={couponInfo} onChange={changeFormInfo} />
      <br />
      <br />
      <button onClick={navigatetoOrderConfirmation}>Place Order</button>
    </div>
  );
};
export default Payment;
