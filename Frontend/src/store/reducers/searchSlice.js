import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
  name: "searched_products",
  initialState: {},
  reducers: {
    get_searched_products(state, action) {
      if (!state.content) {
        return { ...action.payload };
      } else {
        return {
          ...state,
          content: [...state.content, ...action.payload?.content],
        };
      }
    },
  },
});

export default searchSlice.reducer;
export const { get_searched_products } = searchSlice.actions;
