import { createSlice } from "@reduxjs/toolkit";

const categoryProductsSlice = createSlice({
  name: 'category_products',
  initialState: {
    category_title: '',
    category_products: []
  },
  reducers: {
    get_category_products(state, action) {
      return {
        category_title: action.payload.title,
        category_products: action.payload.productDtoList
      }
    }
  }
})

export default categoryProductsSlice.reducer;
export const { get_category_products } = categoryProductsSlice.actions;