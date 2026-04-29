import { configureStore } from "@reduxjs/toolkit";
import  productReducer  from "../features/products/productSlice";
import { productApi } from "../features/products/productApi";

export const store = configureStore({
    reducer: {
        products: productReducer,
        [productApi.reducerPath]: productApi.reducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(productApi.middleware)
})