import axios from "axios";
import { get_brands } from "../store/reducers/brandSlice";
import { get_categories } from "../store/reducers/categoriesSlice";
import { get_filtered_subcategory_products, get_subcategory_products } from "../store/reducers/categoryProductsSlice";
import { get_subcategories_by_main } from "../store/reducers/subCategoriesSlice";
import { product_offers } from "../store/reducers/offersSlice";
import { get_filter_data } from "../store/reducers/filterSlice";
import { get_subcategory_by_title } from "../store/reducers/subCategorySlice";
import { data } from "jquery";

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
				.then((data) => dispatch(get_categories(data)))
				.catch(() => {
					console.error("Failed to fetch data from the server. Setting empty categories.");
					dispatch(get_categories([]));
				})
		} catch (error) {
			console.error("fetch error: ", error);
			dispatch(get_categories([]));
		}

	};
};

export const fetch_sub_categories_by_main = (id) => {
	return function (dispatch) {
		try {
			fetch(`${base_url}/mainCategory/byIdWithProducts/${id}`)
				.then((res) => res.json())
				.then((data) => dispatch(get_subcategories_by_main(data)))
				.catch(() => {
					console.error("Failed to fetch data from the server. Setting empty categories.");
					dispatch(get_subcategories_by_main([]));
				})
		} catch (error) {
			console.error("fetch error: ", error);
			dispatch(get_subcategories_by_main([]));
		}
	};
};

export const fetch_brands = () => {
	return function (dispatch) {
		try {
			fetch(`${base_url}/brand/all`)
				.then((res) => res.json())
				.then((data) => dispatch(get_brands(data)))
				.catch(() => {
					console.error("Failed to fetch data from the server. Setting empty categories.");
					dispatch(get_brands([]));
				})
		} catch (error) {
			console.error("fetch error: ", error);
			dispatch(get_brands([]));
		}
	};
};

export const fetch_subcategory_products = (id) => {
	return function (dispatch) {
		try {
			fetch(`${base_url}/sub_category/get_by_id/${id}`)
				.then((res) => res.json())
				.then((data) => dispatch(get_subcategory_products(data)))
				.catch(() => {
					console.error("Failed to fetch data from the server. Setting empty categories.");
					dispatch(get_subcategory_products([]));
				})
		} catch (error) {
			console.error("fetch error: ", error);
			dispatch(get_subcategory_products([]));
		}
	};
};

export const fetch_filtered_subcategory_products = (requestUrl) => {
	return function (dispatch) {
		try {
			fetch(requestUrl)
				.then((res) => res.json())
				.then((data) => dispatch(get_filtered_subcategory_products(data)))
				.catch(() => {
					console.error("Failed to fetch data from the server. Setting empty categories.");
					dispatch(get_filtered_subcategory_products([]));
				})
		} catch (error) {
			console.error("fetch error: ", error);
			dispatch(get_subcategory_products([]));
		}
	};
};

export const fetch_get_subcategory_by_title = (title) => {
	return function (dispatch) {
		try {
			fetch(`${base_url}/sub_category/get_by_title/${title}`)
				.then((res) => res.json())
				.then((data) => dispatch(get_subcategory_by_title(data)))
				.catch(() => {
					console.error("Failed to fetch data from the server. Setting empty categories.");
					dispatch(get_subcategory_by_title({}));
				})
		} catch (error) {
			console.error("fetch error: ", error);
			dispatch(get_subcategory_by_title({}));
		}
	};
};

export const fetch_offers_products = (tag) => {
	return function (dispatch) {
		try {
			fetch(`${base_url}/product/${tag}?page=1&size=6`)
				.then((resp) => resp.json())
				.then((data) => dispatch(product_offers(data)))
				.catch(() => {
					console.error("Failed to fetch data from the server. Setting empty categories.");
					dispatch(product_offers([]));
				})
		} catch (error) {
			console.error("fetch error: ", error);
			dispatch(product_offers([]));
		}
	};
};

export const fetch_filter_data = () => {
	return function (dispatch) {
		try {
			fetch(`${base_url}/filter/get`)
				.then((res) => res.json())
				.then((data) => dispatch(get_filter_data(data)))
				.catch(() => {
					console.error("Failed to fetch data from the server. Setting empty categories.");
					dispatch(get_filter_data([]));
				})
		} catch (error) {
			console.error("fetch error: ", error);
			dispatch(get_filter_data([]));
		}
	};
};
