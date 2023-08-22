import { createSlice } from "@reduxjs/toolkit";
import userEvent from "@testing-library/user-event";

const updateSessionStorage = (token) => {
	sessionStorage.setItem("user_token", JSON.stringify(token));
};

const sessionStorageData = JSON.parse(sessionStorage.getItem("user_token"));

const userSlice = createSlice({
	name: 'user',
	initialState: {
		token: sessionStorageData?.token || '',
		id: '',
		surname: '',
		name: '',
		email: '',
		phone: '',
		birthday: '',
		city:'',
		postcode:'',
		street:'',
		house: '',
		appartment: ''
	},
	reducers: {
		set_user(state, action) {
			state.id = action.payload.id || ''
			state.surname = action.payload.lastName || ''
			state.name = action.payload.firstName || ''
			state.email = action.payload.email || ''
			state.birthday = action.payload.birthDate || ''
			state.phone = action.payload.phoneNumber || ''
			state.token = action.payload.email || ''
			//state.city = action.payload.city  || ''
			state.city = action.payload.address  || ''
			state.postcode = action.payload.poscode || ''
			state.street = action.payload.street || ''
			state.house = action.payload.house || ''
			state.appartment = action.payload.appartment || ''
			updateSessionStorage(state.token);
		},
		//sign_auth_user(state, action) {
		//	console.log("🚀 ~ file: userSlice.js:25 ~ sign_auth_user ~ action:", action.payload)
		//	return { ...state, token: action.payload }
		//},
		remove_user() {
			updateSessionStorage('');
			return {}
		}
	}
})

export default userSlice.reducer;
export const { set_user, remove_user } = userSlice.actions;