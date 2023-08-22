import { createSlice } from "@reduxjs/toolkit";

const brandItemSlice = createSlice({
  name: "brandItem",
  initialState: {
    brand_image: "",
    brand_description: "",
    brand_product_list: [],
  },
  reducers: {
    get_brand_products(state, action) {
      console.log(action.payload);
      return action.payload.content
        ? {
            brand_product_list: action.payload.content,
            brand_description: action.payload.brand.description,
            brand_image: action.payload.brand.brandImageLink,
          }
        : {};
    },
  },
});

export default brandItemSlice.reducer;
export const { get_brand_products } = brandItemSlice.actions;
