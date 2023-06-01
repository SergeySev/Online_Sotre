import axios from "axios"
import { getCategoriesAction } from "../store/reducers/categoriesReducer";
import { getSubcategoriesByMainAction } from "../store/reducers/subCategoriesReducer";
const add_user_url = 'http://localhost:8080/api/v1/client/registration'
const get_main_categories_url = 'http://localhost:8080/api/v1/mainCategory/all'
const get_subcategories_by_main_url = 'http://localhost:8080/api/v1/mainCategory/byId/';

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
      .then(data => dispatch(getCategoriesAction(data)))
  }
}

export const fetch_sub_categories_by_main = (id) => {
  return function (dispatch) {
    fetch(`${get_subcategories_by_main_url}${id}`)
      .then(res => res.json())
      .then(data => dispatch(getSubcategoriesByMainAction(data)))
  }
}

// export const get_product_category_by_main = () => {
//   const title = 'For%20home%20and%20garden'
//   return function (dispatch) {
//     fetch(get_product_category_by_main_url + title)
//       .then(res => res.json())
//       .then(data => dispatch(getCategoriesByMainAction(data)))
//   }
// }
