import { configureStore } from "@reduxjs/toolkit";

import productsReducer, {
	productsFetching,
} from "../feature/products/productSlice";
import cartReducer from "../feature/products/cartSlice";

export const store = configureStore({
	reducer: {
		products: productsReducer,
		cart: cartReducer,
	},
});

store.dispatch(productsFetching());
