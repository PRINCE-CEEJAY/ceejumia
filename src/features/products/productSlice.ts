import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    products: []
}

const productSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {
        addProduct: (state, action) => {

        },
    }
})

export const {} = productSlice.actions
export default productSlice.reducer