import { configureStore, combineReducers } from "@reduxjs/toolkit";
import brandSlice from "./reducers/brandSlice";
import categoriesSlice from "./reducers/categoriesSlice";
import categoryProductsSlice from "./reducers/categoryProductsSlice";
import subCategoriesSlice from "./reducers/subCategoriesSlice";
import offersSlice from "./reducers/offersSlice";
import navSlice from "./reducers/navSlice";

const rootReducer = combineReducers({
  categories: categoriesSlice,
  subcategories: subCategoriesSlice,
  brands: brandSlice,
  category_products: categoryProductsSlice,
	offers: offersSlice,
	navigation: navSlice
})

export const store = configureStore({
  reducer: rootReducer
})