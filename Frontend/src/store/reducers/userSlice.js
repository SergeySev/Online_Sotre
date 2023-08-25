import { createSlice } from "@reduxjs/toolkit";

const updateSessionStorage = (token) => {
	sessionStorage.setItem("user_token", token);
};

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
			console.log(
				"🚀 ~ file: userSlice.js:29 ~ set_user ~ action:",
				action.payload
			);

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

		logout_user() {
			updateSessionStorage("");
			return {};
		},
	},
});

export default userSlice.reducer;
export const { set_user, logout_user } = userSlice.actions;
