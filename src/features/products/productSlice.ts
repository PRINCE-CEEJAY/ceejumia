import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { ProductType, StateType } from "./ProductTypes";

const initialState: StateType = {
    products: []
}

export const productSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {
        addProduct: (state: StateType, action: PayloadAction<ProductType>) => {
            state.products.push({
                id:action.payload.id ?? Date.now(),
                ...action.payload                
            })
        },

        updateProduct: (state: StateType, action: PayloadAction<ProductType>)=>{
            state.products = state.products.map(p => p.id === action.payload.id ? {
                ...p,
                name: action.payload.name ?? p.name,
                image: action.payload.image ?? p.image,
                description: action.payload.description ?? p.description,
                price: action.payload.price ?? p.price,
                status: action.payload.status ?? p.status,                
            }: p)          
        },

        removeProduct: (state: StateType, action: PayloadAction<ProductType>) => {
            state.products = state.products.filter(p=> p.id !== action.payload.id)
        }
    }
})

export const {addProduct, updateProduct, removeProduct} = productSlice.actions
export default productSlice.reducer