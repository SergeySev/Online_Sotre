import { createSlice } from "@reduxjs/toolkit";

const filterSlice = createSlice({
  name: 'filter',
  initialState: {
    countries_list: [],
    colors_list: [],
    brands_list: [],
    deliveries_list: [],
  },
  reducers: {
    get_filter_data(state, action) {
      console.log(action.payload)
      state.countries_list = [...action.payload['Made Country']]
      state.colors_list = [...action.payload['Color']]
      state.brands_list = [...action.payload['Brands']]
      state.deliveries_list = [...action.payload['Delivery Type']]
    }
  }
})

export default filterSlice.reducer;
export const { get_filter_data } = filterSlice.actions;