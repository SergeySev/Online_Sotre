import { get_brands } from "../store/reducers/brandSlice";
import { get_categories } from "../store/reducers/categoriesSlice";
import {
	get_filtered_subcategory_products,
	get_subcategory_products,
} from "../store/reducers/categoryProductsSlice";
import { get_subcategories_by_main } from "../store/reducers/subCategoriesSlice";
import { product_offers } from "../store/reducers/offersSlice";
import { get_filter_data } from "../store/reducers/filterSlice";
import { get_subcategory_by_title } from "../store/reducers/subCategorySlice";
import { aside_product_offers } from "../store/reducers/asideOffersSlice";
import { toggle_comparison } from "../store/reducers/comparisonSlice";
import { get_brand_products } from "../store/reducers/brandItemSlice";
import { logout_user, set_user } from "../store/reducers/userSlice";

const base_url = "http://localhost:8080/api/v1";

export const fetch_check_token = (token) => {
	return function (dispatch) {
		try {
			fetch(`${base_url}/client/check_token`, {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify(token),
			})
				.then((res) => res.json())
				.then((data) => dispatch(set_user(data)));
		} catch (error) {
			console.error("fetch error: ", error);
		}
	};
};

export const fetch_user_logout = (user_id) => {
	return function (dispatch) {
		try {
			fetch(`${base_url}/client/logOut`, {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify(user_id),
			})
				.then((res) => res.json())
				.then((data) => dispatch(logout_user(data)));
		} catch (error) {
			console.error("fetch error: ", error);
		}
	};
};

export const sign_in_user = async (user_auth) => {
	try {
		const response = await fetch(`${base_url}/client/logIn`, {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(user_auth),
		});
		const responseData = await response.json();
		return responseData;
	} catch (error) {
		console.error("fetch error: ", error);
	}
};

export const register_user = async (user) => {
	try {
		const response = await fetch(`${base_url}/client/registration`, {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(user),
		});
		const responseData = await response.json();
		return responseData;
	} catch (error) {
		console.error("fetch error: ", error);
	}
};

export const fetch_main_categories = () => {
	return function (dispatch) {
		try {
			fetch(`${base_url}/mainCategory/all`)
				.then((res) => res.json())
				.then((data) => dispatch(get_categories(data)))
				.catch(() => {
					console.error(
						"Failed to fetch data from the server. Setting empty categories."
					);
					dispatch(get_categories([]));
				});
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
					console.error(
						"Failed to fetch data from the server. Setting empty categories."
					);
					dispatch(get_subcategories_by_main([]));
				});
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
					console.error(
						"Failed to fetch data from the server. Setting empty categories."
					);
					dispatch(get_brands([]));
				});
		} catch (error) {
			console.error("fetch error: ", error);
			dispatch(get_brands([]));
		}
	};
};

// http://localhost:8080/api/v1/product/byFilterWithBrand?page=1&size=30&brandTitle=Sniezka&priceFrom=0&priceTo=500

export const fetch_brand_products = (brand) => {
	return function (dispatch) {
		try {
			fetch(
				`${base_url}/product/byFilterWithBrand?page=1&size=30&brandTitle=${brand}&priceFrom=0&priceTo=500`
			)
				.then((res) => res.json())
				.then((data) => dispatch(get_brand_products(data)));
		} catch (error) {
			console.error("fetch error: ", error);
			dispatch(get_brand_products([]));
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
					console.error(
						"Failed to fetch data from the server. Setting empty categories."
					);
					dispatch(get_subcategory_products([]));
				});
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
					dispatch(get_filtered_subcategory_products([]));
				});
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
					console.error(
						"Failed to fetch data from the server. Setting empty categories."
					);
					dispatch(get_subcategory_by_title({}));
				});
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
					console.error(
						"Failed to fetch data from the server. Setting empty categories."
					);
					dispatch(product_offers([]));
				});
		} catch (error) {
			console.error("fetch error: ", error);
			dispatch(product_offers([]));
		}
	};
};

export const fetch_aside_offers = () => {
	return function (dispatch) {
		try {
			fetch(`${base_url}/offers/all`)
				.then((resp) => resp.json())
				.then((data) => dispatch(aside_product_offers(data)))
				.catch(() => {
					console.error(
						"Failed to fetch data from the server. Setting empty categories."
					);
					dispatch(aside_product_offers([]));
				});
		} catch (error) {
			console.error("fetch error: ", error);
			dispatch(aside_product_offers([]));
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
					console.error(
						"Failed to fetch data from the server. Setting empty categories."
					);
					dispatch(get_filter_data([]));
				});
		} catch (error) {
			console.error("fetch error: ", error);
			dispatch(get_filter_data([]));
		}
	};
};

export const fetch_comparison_product = (product_id) => {
	return function (dispatch) {
		try {
			fetch(`${base_url}/product/getProductById?id=${product_id}`)
				.then((res) => res.json())
				.then((data) => {
					console.log("🚀 ~ file: requests.js:204 ~ .then ~ data:", data);
					dispatch(toggle_comparison(data));
				})
				.catch(() => {
					console.error(
						"Failed to fetch data from the server. Setting empty categories."
					);
					dispatch(toggle_comparison({}));
				});
		} catch (error) {
			console.error("fetch error: ", error);
			dispatch(toggle_comparison({}));
		}
	};
};
