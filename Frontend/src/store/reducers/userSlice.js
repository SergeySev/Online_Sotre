import { createSlice } from "@reduxjs/toolkit";

const updateSessionStorage = (token) => {
	sessionStorage.setItem("user_token", token);
};

const userSlice = createSlice({
	name: "user",
	initialState: {
		id: "",
		firstName: "",
		lastName: "",
		email: "",
		phoneNumber: "",
		birthDate: "",
		city: "",
		postCode: "",
		street: "",
		houseNumber: "",
		apartmentNumber: "",
		purchases: [],
		token: "",
	},
	reducers: {
		set_user(state, action) {
			//console.log(
			//	"🚀 ~ file: userSlice.js:29 ~ set_user ~ action:",
			//	action.payload
			//);

			state.id = action.payload.id || "";
			state.firstName = action.payload.firstName || "";
			state.lastName = action.payload.lastName || "";
			state.email = action.payload.email || "";
			state.phoneNumber = action.payload.phoneNumber || "";
			state.birthDate = action.payload.birthDate || "";
			state.city = action.payload.address?.city || "";
			state.postCode = action.payload.address?.postCode || "";
			state.street = action.payload.address?.street || "";
			state.houseNumber = action.payload.address?.houseNumber || "";
			state.apartmentNumber = action.payload.address?.apartmentNumber || "";
			state.purchases = action.payload.purchases || [];
			state.token = action.payload.token || "";
			updateSessionStorage(state.token);
		},

		logout_user() {
			updateSessionStorage("");
			return {};
		},

		update_user(state, action) {
			console.log(
				"🚀 ~ file: userSlice.js:29 ~ set_user ~ action:",
				action.payload
			);
		},
	},
});

export default userSlice.reducer;
export const { set_user, logout_user, update_user } = userSlice.actions;
