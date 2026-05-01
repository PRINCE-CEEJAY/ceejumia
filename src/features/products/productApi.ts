import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react"

export const productApi = createApi({
    reducerPath: 'productApi',
    baseQuery: fetchBaseQuery({baseUrl: 'https://dummyjson.com/'}),
    endpoints: (builder) => ({
        getProducts: builder.query({
            query: ()=> 'products'
        }),
        
        getProductById: builder.query({
            query: (id) => `products/${id}`
        }), 

        addProduct: builder.mutation({
            query: (product) => ({
                url: 'products/add',
                method: 'POST',
                body: product,
            })
        }),

        removeProduct: builder.mutation({
            query: (productId) =>({
                url: `products/${productId}`,
                method: 'DELETE'
            })
        }),

        updateProduct: builder.mutation({
            query: (action) => ({
                url: `products/${action.paylod.id}`,
                method: 'PUT',
                body: action.payload 
            })
        })
    }),

})

export const {
    useGetProductsQuery, 
    useGetProductByIdQuery, 
    useAddProductMutation,
    useUpdateProductMutation,
} = productApi