import { createSlice } from "@reduxjs/toolkit";

const productItemSlice = createSlice({
  name: "productItem",
  initialState: {},
  reducers: {
    get_product_info(state, action) {
      console.log(action.payload);
      return action.payload;
    },
  },
});

export default productItemSlice.reducer;
export const { get_product_info } = productItemSlice.actions;
