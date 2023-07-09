import { createSlice } from "@reduxjs/toolkit";



const subCategorySlice = createSlice({
	name: 'subCategory',
	initialState: {},
	reducers: {
		get_subcategory_by_title(state, action) {
			return action.payload ? action.payload : {}
		}
	}
})

export default subCategorySlice.reducer;
export const { get_subcategory_by_title } = subCategorySlice.actions;