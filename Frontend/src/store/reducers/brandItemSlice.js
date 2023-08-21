import { createSlice } from "@reduxjs/toolkit";

const brandItemSlice = createSlice({
	name: 'brandItem',
	initialState: {
		brand_image: '',
		brand_product_list: []
	},
	reducers: {
		get_brand_products(state, action) {
			return action.payload.content ? { ...state, brand_product_list: [...state.brand_product_list, action.payload.content] } : {}
		}
	}
})

export default brandItemSlice.reducer;
export const { get_brand_products } = brandItemSlice.actions;