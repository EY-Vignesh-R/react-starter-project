import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { addProduct } from "../store/products/cartSlice";
import { nanoid } from "@reduxjs/toolkit";

const ProductList = () => {
  const productsList = [
    { id: 1, productName: "Apple Airpods", productPrice: 49999 },
    { id: 2, productName: "Oneplus 4k AMOLED TV ", productPrice: 100000 },
    { id: 3, productName: "Apple iphone 14pro max", productPrice: 140000 },
    { id: 4, productName: "HP EliteBook", productPrice: 150000 },
    { id: 5, productName: "Realme Mini Pad", productPrice: 9999 },
  ];
  const dispatch = useDispatch();
  const addProductHandler = (prod) => {
    dispatch(addProduct({ id: nanoid(), product: prod }));
  };
  return (
    <div>
      <h1>Product List</h1>
      <ol>
        {productsList.map((x) => {
          return (
            <li key={x.id}>
              <ul>
                <li>Product Name : {x.productName}</li>
                <li>
                  Price :<b>Rs {x.productPrice}</b>
                </li>
                <button
                  onClick={() => {
                    addProductHandler(x);
                  }}
                >
                  Add to Cart
                </button>
              </ul>
            </li>
          );
        })}
      </ol>
      <button>
        <Link style={{ textDecoration: "none" }} to={"/cartItems"}>
          Cart
        </Link>
      </button>
    </div>
  );
};
export default ProductList;
