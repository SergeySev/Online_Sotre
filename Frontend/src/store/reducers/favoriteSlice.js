import { createSlice } from "@reduxjs/toolkit";


const updateLocalStorage = (list, amount) => {
	const data = {
		favorite_list: list,
		total_amount: amount,
	};

	localStorage.setItem('favorite', JSON.stringify(data));
};


const localStorageData = JSON.parse(localStorage.getItem('favorite'));

const favoriteSlice = createSlice({
	name: "favorite",
	initialState: {
		total_amount: localStorageData?.total_amount || 0,
		favorite_list: localStorageData?.favorite_list || [],
	},
	reducers: {
		toggle_favorite(state, action) {
			const product = action.payload;
			const temp_product = state.favorite_list.find(elem => elem.id === product.id);
			if (!temp_product) {
				state.favorite_list.push(product);
				state.total_amount += 1;
			} else {
				state.total_amount -= 1;
				state.favorite_list = state.favorite_list.filter(elem => elem.id !== product.id)
			}
			updateLocalStorage(state.favorite_list, state.total_amount);
		}
	}
})

export default favoriteSlice.reducer;
export const { toggle_favorite } = favoriteSlice.actions;