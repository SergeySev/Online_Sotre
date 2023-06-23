import { configureStore, combineReducers } from "@reduxjs/toolkit";
import brandSlice from "./reducers/brandSlice";
import categoriesSlice from "./reducers/categoriesSlice";
import categoryProductsSlice from "./reducers/categoryProductsSlice";
import subCategoriesSlice from "./reducers/subCategoriesSlice";

const rootReducer = combineReducers({
  categories: categoriesSlice,
  subcategories: subCategoriesSlice,
  brands: brandSlice,
  category_products: categoryProductsSlice
})

export const store = configureStore({
  reducer: rootReducer
})