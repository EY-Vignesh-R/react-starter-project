import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./products/cartSlice";
import paymentReducer from "./products/paySlice";

const store = configureStore({
  reducer: {
    cart: cartReducer,
    // payment:paymentReducer
  },
});

export default store;
