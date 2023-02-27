import { createSlice } from "@reduxjs/toolkit";
const cartSlice=createSlice({
name:"cart",
initialState:{
    product:[]
},
reducers:{
    addProduct:(state,action)=>{
        state.product.push(action.payload);
    }
}
});
export const {addProduct} = cartSlice.actions;
export default cartSlice.reducer;