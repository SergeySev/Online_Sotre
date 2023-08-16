import { createSlice } from "@reduxjs/toolkit";
import userEvent from "@testing-library/user-event";

const userSlice = createSlice({
	name: 'user',
	initialState: {
		//id: '',
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
			//state.id = action.payload.id
			state.surname = action.payload.lastName
			state.name = action.payload.firstName
			state.email = action.payload.email
			state.birthday = action.payload.birthDate
			state.phone = action.payload.phoneNumber
			state.token = action.payload.email
		},
		sign_auth_user(state, action) {
			 console.log("🚀 ~ file: userSlice.js:25 ~ sign_auth_user ~ action:", action.payload)
			return { ...state, token: action.payload }
		},
		remove_user() {
			return {}
		}
	}
})

export default userSlice.reducer;
export const { set_user, sign_auth_user, remove_user } = userSlice.actions;