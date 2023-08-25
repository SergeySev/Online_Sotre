import { createSlice } from "@reduxjs/toolkit";
import userEvent from "@testing-library/user-event";

const updateSessionStorage = (token) => {
	sessionStorage.setItem("user_token", token);
};

//const sessionStorageData = sessionStorage.getItem("user_token");

const userSlice = createSlice({
	name: "user",
	initialState: {
		id: "",
		token: "",
		surname: "",
		name: "",
		email: "",
		phone: "",
		birthday: "",
		city: "",
		postcode: "",
		street: "",
		house: "",
		appartment: "",
		purchases: [],
	},
	reducers: {
		set_user(state, action) {
			//console.log(
			//	"🚀 ~ file: userSlice.js:29 ~ set_user ~ action:",
			//	action.payload
			//);

			state.id = action.payload.id || "";
			state.surname = action.payload.lastName || "";
			state.name = action.payload.firstName || "";
			state.email = action.payload.email || "";
			state.birthday = action.payload.birthDate || "";
			state.phone = action.payload.phoneNumber || "";
			state.token = action.payload.token || "";
			state.city = action.payload.address?.city || "";
			state.postcode = action.payload.address?.postCode || "";
			state.street = action.payload.address?.street || "";
			state.house = action.payload.address?.houseNumber || "";
			state.appartment = action.payload.address?.apartmentNumber || "";
			state.purchases = action.payload.purchases || [];
			updateSessionStorage(state.token);
		},
		//sign_auth_user(state, action) {
		//	console.log("🚀 ~ file: userSlice.js:25 ~ sign_auth_user ~ action:", action.payload)
		//	return { ...state, token: action.payload }
		//},
		logout_user(state, action) {
			console.log("🚀 ~ file: userSlice.js:50 ~ logout_user ~ state:", state);
			console.log(
				"🚀 ~ file: userSlice.js:50 ~ logout_user ~ action:",
				action.payload
			);
			updateSessionStorage("");
			return {};
		},
	},
});

export default userSlice.reducer;
export const { set_user, logout_user } = userSlice.actions;
