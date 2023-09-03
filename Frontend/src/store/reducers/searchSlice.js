import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
  name: "searched_products",
  initialState: {},
  reducers: {
    get_searched_products(state, action) {
      console.log(action.payload);
      if (!state.content) {
        return { ...action.payload };
      } else {
        return {
          ...state,
          content: [...state.content, ...action.payload?.content],
        };
      }
    },
    clean_searched_products() {
      return {};
    },
  },
});

export default searchSlice.reducer;
export const { get_searched_products, clean_searched_products } =
  searchSlice.actions;
