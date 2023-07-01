import { createSlice } from "@reduxjs/toolkit";

const navSlice = createSlice({
	name: 'navigation',
	initialState: {
		active_tag: 'novelties',
		nav_list: [
		{
			id: 1,
			title: 'Novelties',
			tag: 'novelties'
		},
		{
			id: 2,
			title: 'Promotions',
			tag: 'promo'
		},
		{
			id: 3,
			title: 'Sale hits',
			tag: 'hit'
		}
	]
},
	reducers: {
		toggle_offer(state, action){
			state.active_tag = action.payload
		}
	}
})

export default navSlice.reducer;
export const {toggle_offer} = navSlice.actions