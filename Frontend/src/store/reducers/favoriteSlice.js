import { createSlice } from "@reduxjs/toolkit";
import { sortByHits, sortByNew, sortByPromo } from "../actions";


const updateLocalStorage = (list, amount) => {
	const data = {
		favorite_list: list,
		total_amount: amount,
	};
	// console.log("updateLocalStorage data: ", data);

	localStorage.setItem('favorite', JSON.stringify(data));
};


const localStorageData = JSON.parse(localStorage.getItem('favorite'));
// console.log("localStorageData: ", localStorageData);

const favoriteSlice = createSlice({
	name: "favorite",
	initialState: {
		total_amount: localStorageData ? localStorageData.total_amount : 0,
		favorite_list: localStorageData ? [...localStorageData?.favorite_list] : [],
	},
	reducers: {
		toggle_favorite(state, action) {
			const product = action.payload;
			const temp_product = state.favorite_list.find(elem => elem.id === product.id);
			if (!temp_product) {
				state.favorite_list.push({ ...product, added_time: Date.now() });
				state.total_amount += 1;
			} else {
				state.total_amount -= 1;
				state.favorite_list = state.favorite_list.filter(elem => elem.id !== product.id)
			}
			updateLocalStorage(state.favorite_list, state.total_amount);
		},
		sort_by_new(state) {
			state.favorite_list = sortByNew(state.favorite_list);
			updateLocalStorage(state.favorite_list, state.total_amount);
		},
		sort_by_hits(state) {
			state.favorite_list = sortByHits(state.favorite_list);
			updateLocalStorage(state.favorite_list, state.total_amount);
		},
		sort_by_promo(state) {
			state.favorite_list = sortByPromo(state.favorite_list);
			updateLocalStorage(state.favorite_list, state.total_amount);
		},
		sort_ascending_price(state) {
			state.favorite_list = [...state.favorite_list].sort((a, b) => {
				const priceA = a.discountPrice || a.price
				const priceB = b.discountPrice || b.price
				return priceA === priceB ? 0 : priceA > priceB ? 1 : -1
			});
			updateLocalStorage(state.favorite_list, state.total_amount);
		},
		sort_descending_price(state) {
			state.favorite_list = [...state.favorite_list].sort((a, b) => {
				const priceA = a.discountPrice || a.price
				const priceB = b.discountPrice || b.price
				return priceA === priceB ? 0 : priceA > priceB ? -1 : 1
			});
			updateLocalStorage(state.favorite_list, state.total_amount);
		},
		sort_fromA(state) {
			state.favorite_list = [...state.favorite_list].sort((a, b) => {
				const titleA = a.title.toUpperCase();
				const titleB = b.title.toUpperCase();
				return titleA === titleB ? 0 : titleA > titleB ? 1 : -1;
			});
			updateLocalStorage(state.favorite_list, state.total_amount);
		},
		sort_fromZ(state) {
			state.favorite_list = [...state.favorite_list].sort((a, b) => {
				const titleA = a.title.toUpperCase();
				const titleB = b.title.toUpperCase();
				return titleA === titleB ? 0 : titleA > titleB ? -1 : 1;
			});
			updateLocalStorage(state.favorite_list, state.total_amount);
		}
	}
})

export default favoriteSlice.reducer;
export const { toggle_favorite, sort_by_new, sort_by_hits, sort_by_promo, sort_ascending_price, sort_descending_price, sort_fromA, sort_fromZ } = favoriteSlice.actions;