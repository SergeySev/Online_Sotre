import { createSlice } from "@reduxjs/toolkit";

//const updateLocalStorage = (list, amount, titles, table, main_characters) => {
const updateLocalStorage = (list, amount, titles, table) => {
	const data = {
		comparison_list: list,
		total_amount: amount,
		categories_titles: titles,
		comparison_table: table,
		//main_characters: main_characters,
	};

	localStorage.setItem("comparison", JSON.stringify(data));
};

const localStorageData = JSON.parse(localStorage.getItem("comparison"));

const comparisonSlice = createSlice({
	name: "comparison",
	initialState: {
		total_amount: localStorageData?.total_amount || 0,
		comparison_list: localStorageData?.comparison_list || [],
		categories_titles: localStorageData?.categories_titles || [],
		comparison_table: localStorageData?.comparison_table || [],
		main_characters_list: ["brand", "description", "colour"],
		//main_characters: localStorageData?.main_characters || [],
	},
	reducers: {
		toggle_comparison(state, action) {
			const product = action.payload;
			const temp_product = state.comparison_list.find(
				(elem) => elem.id === product.id
			);
			if (!temp_product) {
				state.comparison_list.push(product);
				state.total_amount += 1;
			} else {
				state.total_amount -= 1;
				state.comparison_list = state.comparison_list.filter(
					(elem) => elem.id !== product.id
				);
			}
			state.categories_titles = [
				...new Set(state.comparison_list.map((item) => item.mainCategoryTitle)),
			];
			state.comparison_table = state.comparison_list.map((product) => {
				const main_characters = {
					brand: product.brand,
					description: product.description,
					color: product.colour,
				};
				const additional_characters = product.characteristicDto;
				const all_characters = {... main_characters, ...additional_characters};
				const product_characters = {
					category_title: product.mainCategoryTitle,
					product_title: product.title,
					characters: { main_characters, additional_characters, all_characters },
				};
				return product_characters;
			});

			//state.main_characters = state.comparison_list.map((product) => {
			//	return [product.brand, product.description, product.colour];
			//});
			updateLocalStorage(
				state.comparison_list,
				state.total_amount,
				state.categories_titles,
				state.comparison_table,
				//state.main_characters
			);
		},
	},
});

export default comparisonSlice.reducer;
export const { toggle_comparison } = comparisonSlice.actions;
