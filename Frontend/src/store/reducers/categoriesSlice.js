import { createSlice } from "@reduxjs/toolkit";

const categoriesSlice = createSlice({
	name: 'categories',
	initialState: [],
	reducers: {
		get_categories(state, action) {
			return [...action.payload]
		}
	}
})

export default categoriesSlice.reducer;
export const { get_categories } = categoriesSlice.actions