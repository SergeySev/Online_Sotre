import { createSlice } from "@reduxjs/toolkit";

const temp_date = new Date(Date.now() + (24 * 60 * 60 * 1000));
const default_date = `${temp_date.getDate()}.${temp_date.getMonth() + 1}.${temp_date.getFullYear()}`

const orderSlise = createSlice({
	name: 'order',
	initialState: {
		first_name: 'your first name',
		last_name: 'your last name',
		phone: '+49 999 99 99',
		email: 'your_email@mail.com',
		delivery: [
			{
				title: 'courier',
				is_active: true,
				address: {
					city: 'city',
					street: 'street',
					house: 'house',
					frame: 'corp.',
					app: 'app'
				},
				date: default_date,
				shipping: 0,
			},
			{
				title: 'pickup',
				is_active: false,
				address: ["Berlin, Alexanderplatz 1", "Munich, Marienplatz 3", "New York, 5th Avenue 1"],
				date: default_date,
			}
		],
	},
	reducers: {
		customer_data(state, action) {
			// console.log("🚀 ~ file: orderSlice.js:34 ~ customer_data ~ action:", action.payload);
			const { first_name, last_name, phone, email } = action.payload
			return { ...state, first_name: first_name, last_name: last_name, phone: phone, email: email }
		},
		delivery_data(state, action) {
			const { title, city, street, house, frame, app, date, shipping } = action.payload
			if (title === 'courier') {
				return {
					...state,
					delivery: [
						{
							address: {
								city: city, street: street, house: house, frame: frame, app: app
							},
							title: 'courier',
							is_active: true,
							date: date,
							shipping: shipping
						},
						state.delivery[1]
					],
				}
			}
		}
	}
})

export default orderSlise.reducer;
export const { customer_data, delivery_data } = orderSlise.actions;