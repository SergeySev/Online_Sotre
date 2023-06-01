import { applyMiddleware, combineReducers, createStore } from "redux";
import { categoriesReducer } from "./reducers/categoriesReducer";
import thunk from "redux-thunk";
import { subCategoriesReducer } from "./reducers/subCategoriesReducer";
import { brandReducer } from "./reducers/brandReducer";

const rootReducer = combineReducers({
  categories: categoriesReducer,
  subcategories: subCategoriesReducer,
  brands: brandReducer,
})

export const store = createStore(rootReducer, applyMiddleware(thunk))