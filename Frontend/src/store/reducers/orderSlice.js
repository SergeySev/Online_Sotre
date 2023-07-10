import { createSlice } from "@reduxjs/toolkit";

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
				date: Date.now(),
				shipping: 0,
			},
			{
				title: 'pickup',
				is_active: false,
				address: ["Berlin, Alexanderplatz 1", "Munich, Marienplatz 3", "New York, 5th Avenue 1"],
				date: Date.now(),
			}
		],
	},
	reducers: {
		customer_data(state, action) {
			console.log("🚀 ~ file: orderSlice.js:34 ~ customer_data ~ action:", action.payload)

		}
	}
})

export default orderSlise.reducer;
export const { customer_data } = orderSlise.actions;