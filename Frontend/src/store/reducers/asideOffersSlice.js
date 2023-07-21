import { createSlice } from "@reduxjs/toolkit";

const asideOffersSlice = createSlice({
	name: 'aside_offers',
	initialState: [],
	reducers: {
		aside_product_offers(state, action) {
			return [...state, ...action.payload]
		}
	}
})

export default asideOffersSlice.reducer;
export const { aside_product_offers } = asideOffersSlice.actions;