import axios from "axios"
import { get_brands } from "../store/reducers/brandSlice";
import { get_categories } from "../store/reducers/categoriesSlice";
import { get_subcategory_products } from "../store/reducers/categoryProductsSlice";
import { get_subcategories_by_main } from "../store/reducers/subCategoriesSlice";
const add_user_url = 'http://localhost:8080/api/v1/client/registration'
const get_main_categories_url = 'http://localhost:8080/api/v1/mainCategory/all'
const get_subcategories_by_main_url = 'http://localhost:8080/api/v1/mainCategory/byIdWithProducts/';
const get_brands_url = 'http://localhost:8080/api/v1/brand/all'
const get_subcategory_products_url = 'http://localhost:8080/api/v1/sub_category/get_by_id/'

export const add_new_user_req = async (user) => {
  try {
    const response = await axios.post(add_user_url, user);
    console.log(response.data);
  } catch (error) {
    console.error(error);
  }
}

export const fetch_main_categories = () => {
  return function (dispatch) {
    fetch(get_main_categories_url)
      .then(res => res.json())
      .then(data => dispatch(get_categories(data)))
  }
}

export const fetch_sub_categories_by_main = (id) => {
  return function (dispatch) {
    fetch(`${get_subcategories_by_main_url}${id}`)
      .then(res => res.json())
      .then(data => dispatch(get_subcategories_by_main(data)))
  }
}

export const fetch_brands = () => {
  return function (dispatch) {
    fetch(get_brands_url)
      .then(res => res.json())
      .then(data => dispatch(get_brands(data)))
  }
}

export const fetch_subcategory_products = (id) => {
  return function (dispatch) {
    fetch(`${get_subcategory_products_url}${id}`)
      .then(res => res.json())
      .then(data => dispatch(get_subcategory_products(data)))
  }
}


