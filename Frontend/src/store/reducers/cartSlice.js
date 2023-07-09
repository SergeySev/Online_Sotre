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
			// console.log("🚀 ~ file: cartSlice.js:26 ~ add_to_cart ~ product:", product)

			if (+product.inStock > 0) {
				const index = state.cart_list.findIndex(elem => elem.id === product.id);

				if (index === -1) {
					const cartItem = { ...product, cart_amount: 1 };
					state.cart_list.push(cartItem);
					state.total_amount += 1;
					const tempTotalSumm =
						state.total_summ +
						(+product.discountPrice || +product.price);
					state.total_summ = +tempTotalSumm.toFixed(2);
				} else {
					const cartItem = state.cart_list[index];
					if (+cartItem.cart_amount < +product.inStock) {
						cartItem.cart_amount += 1;
						state.total_amount += 1;
						const tempTotalSumm =
							state.total_summ +
							(+product.discountPrice || +product.price);
						state.total_summ = +tempTotalSumm.toFixed(2);
					}
				}
				updateLocalStorage(state.cart_list, state.total_amount, state.total_summ);
			}
		},
		remove_from_cart(state, action) {
			console.log("🚀 ~ file: cartSlice.js:54 ~ remove_from_cart ~ action.payload:", action.payload)
			// const product = action.payload;

			const targetProduct = state.cart_list.find(elem => elem.id === action.payload.product.id)
			console.log("🚀 ~ file: cartSlice.js:57 ~ remove_from_cart ~ targetProduct:", targetProduct)
			const quantity = action.payload.count;
			console.log("🚀 ~ file: cartSlice.js:59 ~ remove_from_cart ~ quantity:", quantity)
			// console.log("🚀 ~ file: cartSlice.js:56 ~ remove_from_cart ~ targetProduct:", targetProduct)

			const tempTotalSumm =
				state.total_summ -
				(+targetProduct.discountPrice || +targetProduct.price) * quantity;
			state.total_summ = +tempTotalSumm.toFixed(2);

			state.total_amount -= quantity;
			targetProduct.cart_amount -= quantity;
			if (!targetProduct.cart_amount) {
				state.cart_list = state.cart_list.filter(elem => elem.id !== targetProduct.id);
			}
			updateLocalStorage(state.cart_list, state.total_amount, state.total_summ);
		},
		increment(state, action) { },
		decrement(state, action) { },
	}
})

export default cartSlice.reducer;
export const { add_to_cart, remove_from_cart, increment, decrement } = cartSlice.actions;