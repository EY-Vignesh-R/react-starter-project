import { createSlice } from "@reduxjs/toolkit";
const paySlice = createSlice({
  name: "payment",
  initialState: {
    SelectedPayment: null,
  },
  reducers: {
    addPayment: (state, action) => {
      state.SelectedPayment = action.payload;
    },
  },
});
export const { addPayment } = paySlice.actions;
export default paySlice.reducer;
