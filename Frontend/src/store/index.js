import { configureStore, combineReducers } from "@reduxjs/toolkit";
import brandSlice from "./reducers/brandSlice";
import categoriesSlice from "./reducers/categoriesSlice";
import categoryProductsSlice from "./reducers/categoryProductsSlice";
import subCategoriesSlice from "./reducers/subCategoriesSlice";
import offersSlice from "./reducers/offersSlice";
import navSlice from "./reducers/navSlice";
import cartSlice from "./reducers/cartSlice";
import favoriteSlice from "./reducers/favoriteSlice";
import comparisonSlice from "./reducers/comparisonSlice";

const rootReducer = combineReducers({
	categories: categoriesSlice,
	subcategories: subCategoriesSlice,
	brands: brandSlice,
	category_products: categoryProductsSlice,
	offers: offersSlice,
	navigation: navSlice,
	favorite: favoriteSlice,
	comparison: comparisonSlice,
	cart: cartSlice
})

export const store = configureStore({
	reducer: rootReducer
})