import { applyMiddleware, combineReducers, createStore } from "redux";
import { categoriesReducer } from "./reducers/categoriesReducer";
import thunk from "redux-thunk";
import { subCategoriesReducer } from "./reducers/subCategoriesReducer";
import { brandReducer } from "./reducers/brandReducer";
import { categoryProductsReducer } from "./reducers/categoryProductsReducer";

const rootReducer = combineReducers({
  categories: categoriesReducer,
  subcategories: subCategoriesReducer,
  brands: brandReducer,
  category_products: categoryProductsReducer
})

export const store = createStore(rootReducer, applyMiddleware(thunk))