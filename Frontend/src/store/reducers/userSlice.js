import { createSlice } from "@reduxjs/toolkit";
import userEvent from "@testing-library/user-event";

const userSlice = createSlice({
	name: 'user',
	initialState: {
		id: null,
		// token: null,
		surname: null,
		name: null,
		email: null,
		birthday: null,
		password: null
	},
	reducers: {
		setUser(state, action) {
			console.log("🚀 ~ file: userSlice.js:17 ~ setUser ~ action:", action.payload)
			state.id = action.payload.id
			state.surname = action.payload.surname
			state.name = action.payload.name
			state.email = action.payload.email
			state.birthday = action.payload.birthday
			state.password = action.payload.password
			// state.token = action.payload.token
		},
		removeUser(state) {
			state = {}
		}
	}
})

export default userSlice.reducer;
export const { setUser, removeUser } = userSlice.actions;