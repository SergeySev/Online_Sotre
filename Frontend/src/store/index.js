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
import filterSlice from "./reducers/filterSlice";
import subCategorySlice from "./reducers/subCategorySlice";
import orderSlise from "./reducers/orderSlice";
import requestBodySlice from "./reducers/requestBodySlice";
import asideOffersSlice from "./reducers/asideOffersSlice";
import userSlice from "./reducers/userSlice";
import brandItemSlice from "./reducers/brandItemSlice";

const rootReducer = combineReducers({
	categories: categoriesSlice,
	subcategories: subCategoriesSlice,
	// subCategory: subCategorySlice,
	brands: brandSlice,
	brand_item: brandItemSlice,
	category_products: categoryProductsSlice,
	offers: offersSlice,
	aside_offers: asideOffersSlice,
	navigation: navSlice,
	favorite: favoriteSlice,
	comparison: comparisonSlice,
	cart: cartSlice,
	filter_data: filterSlice,
	order: orderSlise,
	requestBody: requestBodySlice,
	user: userSlice
})

export const store = configureStore({
	reducer: rootReducer
})