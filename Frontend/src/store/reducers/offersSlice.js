import { createSlice } from "@reduxjs/toolkit";

const offersSlice = createSlice({
	name: 'offers',
	initialState: [],
	reducers: {
		product_offers(state, action){
			return [...action.payload.content]
		}
	}
})

export default offersSlice.reducer;
export const {product_offers}  =  offersSlice.actions;