import { useSelector } from "react-redux";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
const Cart = () => {
  const navigate = useNavigate();
  const productDetails = useSelector((state) => state.cart.product);
  console.log(productDetails);
  const [addressInfo, setAddressInfo] = useState("");
  const changeFormInfo = (event) => {
    setAddressInfo(event.target.value);
  };
  const navigatetoPaymentType = () => {
    let regex = /^[#\.0-9a-zA-Z\s,-]+$/;

    if (regex.test(addressInfo) === true) {
      navigate("/paymentType", {
        state: {
          addressInfo,
        },
      });
    } else {
      alert("Invalid Address !!!");
    }
  };
  return (
    <div>
      <h2>Cart Items</h2>
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
      <label>Address</label>
      <br />
      <textarea value={addressInfo} onChange={changeFormInfo} />
      <br />
      <button onClick={navigatetoPaymentType}>Continue</button>
    </div>
  );
};
export default Cart;
