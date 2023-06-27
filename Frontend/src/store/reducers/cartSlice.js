import { createSlice } from "@reduxjs/toolkit";


const updateLocalStorage = (list, amount, summ) => {
	const data = {
		cart_list: list,
		total_amount: amount,
		total_summ: summ,
	};

	localStorage.setItem('cart', JSON.stringify(data));
};

const localStorageData = JSON.parse(localStorage.getItem('cart'));

const cartSlice = createSlice({
	name: 'cart',
	initialState: {
		cart_list: localStorageData?.cart_list || [],
		total_amount: +localStorageData?.total_amount || 0,
		total_summ: +localStorageData?.total_summ || 0,
	},
	reducers: {
		add_to_cart(state, action) {
			const product = action.payload;
			console.log(product);
			if (+product.inStock > 0) {
				const index = state.cart_list.findIndex(elem => elem.id === product.id);

				if (index === -1) {
					const cartItem = { ...product, cart_amount: 1 };
					state.cart_list.push(cartItem);
					state.total_amount += 1;
					state.total_summ = +(Number(state.total_summ) + Number(product.discountPrice || product.price)).toFixed(2);
				} else {
					const cartItem = state.cart_list[index];
					if (+cartItem.cart_amount < +product.inStock) {
						cartItem.cart_amount += 1;
						state.total_amount += 1;
						state.total_summ = +(Number(state.total_summ) + Number(product.discountPrice || product.price)).toFixed(2);
					}
				}
				updateLocalStorage(state.cart_list, state.total_amount, state.total_summ);
			}
		}
	}
})

export default cartSlice.reducer;
export const { add_to_cart } = cartSlice.actions;