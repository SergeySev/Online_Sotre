import { createSlice } from "@reduxjs/toolkit";


const updateLocalStorage = (list, amount) => {
	const data = {
		comparison_list: list,
		total_amount: amount,
	};

	localStorage.setItem('comparison', JSON.stringify(data));
};


const localStorageData = JSON.parse(localStorage.getItem('comparison'));

const comparisonSlice = createSlice({
	name: "comparison",
	initialState: {
		total_amount: localStorageData?.total_amount || 0,
		comparison_list: localStorageData?.comparison_list || [],
	},
	reducers: {
		toggle_comparison(state, action) {
			const product = action.payload;
			const temp_product = state.comparison_list.find(elem => elem.id === product.id);
			if (!temp_product) {
				state.comparison_list.push(product);
				state.total_amount += 1;
			} else {
				state.total_amount -= 1;
				state.comparison_list = state.comparison_list.filter(elem => elem.id !== product.id)
			}
			updateLocalStorage(state.comparison_list, state.total_amount);
		}
	}
})

export default comparisonSlice.reducer;
export const { toggle_comparison } = comparisonSlice.actions;