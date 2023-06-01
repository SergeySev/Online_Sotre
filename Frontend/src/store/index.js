import { applyMiddleware, combineReducers, createStore } from "redux";
import { categoriesReducer } from "./reducers/categoriesReducer";
import thunk from "redux-thunk";
import { subCategoriesReducer } from "./reducers/subCategoriesReducer";

const rootReducer = combineReducers({
  categories: categoriesReducer,
  subcategories: subCategoriesReducer
})

export const store = createStore(rootReducer, applyMiddleware(thunk))