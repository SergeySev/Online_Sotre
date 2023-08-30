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
		orders: [],
		token: "",
	},
	reducers: {
		set_user(state, action) {
			state.id = action.payload?.id || "";
			state.firstName = action.payload?.firstName || "";
			state.lastName = action.payload?.lastName || "";
			state.email = action.payload?.email || "";
			state.phoneNumber = action.payload?.phoneNumber || "";
			state.birthDate = action.payload?.birthDate || "";
			state.city = action.payload.address?.city || "";
			state.postCode = action.payload.address?.postCode || "";
			state.street = action.payload.address?.street || "";
			state.houseNumber = action.payload.address?.houseNumber || "";
			state.apartmentNumber = action.payload.address?.apartmentNumber || "";
			state.purchases = action.payload.purchases || [];
			state.orders =
				action.payload.orders?.map((elem) => {
					const uniqueProducts = [];
					elem.products.forEach((el) => {
						const existingProduct = uniqueProducts.find(
							(product) => product.id === el.id
						);
						if (existingProduct) {
							existingProduct.cart_amount += 1;
						} else {
							uniqueProducts.push({ ...el, cart_amount: 1 });
						}
					});
					elem.products = uniqueProducts;
					return elem;
				}) || [];
			state.token = action.payload.token || "";
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
