import { createSlice } from "@reduxjs/toolkit";

const orderSlise = createSlice({
	name: 'order',
	initialState: {
		first_name: '',
		last_name: '',
		phone: '',
		email: '',
		delivery: [
			{
				title_courier: true,
				address: {
					city: '',
					street: '',
					house: '',
					post_code: '',
					app: ''
				},
				date: '',
				shipping: '',
			},
			{
				title_pickup: false,
				address: ''
			}
		],
		payment: ''
	},
	reducers: {
		customer_data(state, action) {
			const { first_name, last_name, phone, email } = action.payload
			return { ...state, first_name, last_name, phone, email }
		},
		delivery_data(state, action) {
			const { title, city, street, house, frame, app, date, shipping, address } = action.payload
			if (title === 'courier') {
				return {
					...state,
					delivery: [
						{
							address: {
								city: city, street: street, house: house, frame: frame, app: app
							},
							title_courier: true,
							date: date,
							shipping: shipping === "free" ? 50 : shipping
						},
						{
							...state.delivery[1],
							title_pickup: false,
						}
					],
				}
			} else {
				return {
					...state,
					delivery: [
						{
							...state.delivery[0],
							title_courier: false
						},
						{
							title_pickup: true,
							address: address
						}
					],

				}
			}
		},
		payment_data(state, action) {
			// console.log("🚀 ~ file: orderSlice.js:74 ~ payment_data ~ action:", action.payload)
			return { ...state, payment: action.payload }
		}
	}
})

export default orderSlise.reducer;
export const { customer_data, delivery_data, payment_data } = orderSlise.actions;