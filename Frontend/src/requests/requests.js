import axios from "axios";
import { get_brands } from "../store/reducers/brandSlice";
import { get_categories } from "../store/reducers/categoriesSlice";
import { get_subcategory_products } from "../store/reducers/categoryProductsSlice";
import { get_subcategories_by_main } from "../store/reducers/subCategoriesSlice";
import { product_offers } from "../store/reducers/offersSlice";

const base_url = "http://localhost:8080/api/v1";

export const add_new_user_req = async (user) => {
	try {
		const response = await axios.post(`${base_url}/client/registration`, user);
		console.log(response.data);
	} catch (error) {
		console.error(error);
	}
};

export const fetch_main_categories = () => {
	return function (dispatch) {
		try {
			fetch(`${base_url}/mainCategory/all`)
				.then((res) => res.json())
				.then((data) => dispatch(get_categories(data)));
		} catch (error) {
			console.error("fetch error: ", error);
		}
	};
};

export const fetch_sub_categories_by_main = (id) => {
	return function (dispatch) {
		try {
			fetch(`${base_url}/mainCategory/byIdWithProducts/${id}`)
				.then((res) => res.json())
				.then((data) => dispatch(get_subcategories_by_main(data)));
		} catch (error) {
			console.error("fetch error: ", error);
		}
	};
};

export const fetch_brands = () => {
	return function (dispatch) {
		try {
			fetch(`${base_url}/brand/all`)
				.then((res) => res.json())
				.then((data) => dispatch(get_brands(data)));
		} catch (error) {
			console.error("fetch error: ", error);
		}
	};
};

export const fetch_subcategory_products = (id) => {
	return function (dispatch) {
		try {
			fetch(`${base_url}/sub_category/get_by_id/${id}`)
				.then((res) => res.json())
				.then((data) => dispatch(get_subcategory_products(data)));
		} catch (error) {
			console.error("fetch error: ", error);
		}
	};
};

export const fetch_offers_products = (tag) => {
	return function (dispatch) {
		try {
			fetch(`${base_url}/product/${tag}?page=1&size=6`)
				.then((resp) => resp.json())
				.then((data) => dispatch(product_offers(data)));
		} catch (error) {
			console.error("fetch error: ", error);
		}
	};
};
