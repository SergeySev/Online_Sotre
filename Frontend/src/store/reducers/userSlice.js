import { createSlice } from "@reduxjs/toolkit";
import userEvent from "@testing-library/user-event";

const userSlice = createSlice({
	name: 'user',
	initialState: {
		id: '',
		token: '',
		surname: '',
		name: '',
		email: '',
		phone: '',
		birthday: '',
	},
	reducers: {
		set_user(state, action) {
			// console.log("🚀 ~ file: userSlice.js:17 ~ setUser ~ action:", action.payload)
			state.id = action.payload.id
			state.surname = action.payload.surname
			state.name = action.payload.name
			state.email = action.payload.email
			state.birthday = action.payload.birthday
			state.phone = action.payload.phone
			state.token = action.payload.token
		},
		sign_auth_user(state, action) {
			console.log("🚀 ~ file: userSlice.js:25 ~ sign_auth_user ~ action:", action.payload)
			return { ...state, token: action.payload }
		},
		remove_user(state) {
			return { ...state, token: '' }
		}
	}
})

export default userSlice.reducer;
export const { set_user, sign_auth_user, remove_user } = userSlice.actions;