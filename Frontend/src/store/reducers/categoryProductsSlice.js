import { createSlice } from "@reduxjs/toolkit";

const categoryProductsSlice = createSlice({
  name: 'category_products',
  initialState: {
    category_title: '',
    category_products: []
  },
  reducers: {
    get_subcategory_products(state, action) {
      return {
        category_title: action.payload.title,
        category_products: action.payload.productDtoList
      }
    },

    get_filtered_subcategory_products(state, action) {
      if (action.payload.length === 0) {
        return { ...state }
      } else return {
        category_title: action.payload.content[0].subCategoryTitle,
        category_products: action.payload.content
        // ...state
      }
    }
  }
})

export default categoryProductsSlice.reducer;
export const { get_subcategory_products, get_filtered_subcategory_products } = categoryProductsSlice.actions;