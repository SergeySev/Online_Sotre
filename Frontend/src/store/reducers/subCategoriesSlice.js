import { createSlice } from "@reduxjs/toolkit";

const subCategoriesSlice = createSlice({
  name: 'subcategories',
  initialState: [],
  reducers: {
    get_subcategories_by_main(state, action) {
      return [...action.payload.subCategories]
    }
  }
})

export default subCategoriesSlice.reducer;
export const { get_subcategories_by_main } = subCategoriesSlice.actions