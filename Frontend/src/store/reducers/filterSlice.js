import { createSlice } from "@reduxjs/toolkit";

const filterSlice = createSlice({
  name: 'filter',
  initialState: {
    ['Made Country']: [],
    ['Color']: [],
    ['Brands']: [],
    ['Delivery Type']: [],
  },
  reducers: {
    get_filter_data(state, action) {
      console.log(action.payload)
      state['Made Country'] = [...action.payload['Made Country']]
      state['Color'] = [...action.payload['Color']]
      state['Brands'] = [...action.payload['Brands']]
      state['Delivery Type'] = [...action.payload['Delivery Type']]
    }
  }
})

export default filterSlice.reducer;
export const { get_filter_data } = filterSlice.actions;