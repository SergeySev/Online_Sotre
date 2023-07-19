import { color } from "@mui/system";
import { createSlice } from "@reduxjs/toolkit";

const requestBodySlice = createSlice({
  name: 'requestBody',
  initialState: {
    priceRange: [],
    country: [],
    color: [],
    brands: [],
    delivery: []
  },
  reducers: {

    set_price_data(state, action) {
      console.log(action.payload);
      return { ...state, priceRange: [...action.payload] }
    },

    set_country_data(state, action) {
      if (!state.country.includes(action.payload)) {
        return { ...state, country: [...state.country, action.payload] }
      } else {
        return { ...state, country: [...state.country.filter(country => country !== action.payload)] }
      }
    },

    set_color_data(state, action) {
      if (!state.color.includes(action.payload)) {
        return { ...state, color: [...state.color, action.payload] }
      } else {
        return { ...state, color: [...state.color.filter(color => color !== action.payload)] }
      }
    },

    set_brand_data(state, action) {
      if (!state.brands.includes(action.payload)) {
        return { ...state, brands: [...state.brands, action.payload] }
      } else {
        return { ...state, brands: [...state.brands.filter(brand => brand !== action.payload)] }
      }
    },

    set_delivery_data(state, action) {
      if (!state.delivery.includes(action.payload)) {
        return { ...state, delivery: [...state.delivery, action.payload] }
      } else {
        return { ...state, delivery: [...state.delivery.filter(delivery => delivery !== action.payload)] }
      }
    },
  }
})

export default requestBodySlice.reducer;
export const { set_country_data, set_color_data, set_brand_data, set_delivery_data, set_price_data } = requestBodySlice.actions;