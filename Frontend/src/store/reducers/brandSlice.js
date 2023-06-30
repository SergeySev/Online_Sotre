import { createSlice } from "@reduxjs/toolkit";
import { act } from "react-dom/test-utils";

const brandSlice = createSlice({
	name: 'brands',
	initialState: [],
	reducers: {
		get_brands(state, action) {
			return action.payload.content ? [...action.payload.content] : []
		}
	}
})

export default brandSlice.reducer;
export const { get_brands } = brandSlice.actions;