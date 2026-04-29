import { useEffect, useState } from "react"
import { useGetProductByIdQuery, useGetProductsQuery } from "../productApi"

export const ProductList = () => {
  const { data, isLoading, error } = useGetProductsQuery()
  const [selectedItem, setSelectedItem]= useState("all")
  
  const options = ['all', 'beauty', 'fragrances', 'furniture', 'groceries']

  const filtered = data?.products?.filter(product => {
    if(selectedItem === 'all') return true
    return product.category == selectedItem
  })
  

  return (
    <div className="flex flex-col justify-center items-center w-full">
      <h1 className="beautiful-text text-4xl mb-3">PRODUCT LIST</h1>
      <select className="p-2 mb-8 w-md "
      value={selectedItem}
      onChange={(e)=>setSelectedItem(e.target.value)}
      >
        {
          options.map((item, index)=> (
            <option key={index}>{item}</option>
          ))
        }
      </select>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 w-full">
     {
        isLoading ? <h1 className="text-xl font-bold text-center ">Loading ...</h1>:
        filtered.map(product=>(
        <div key={product.id} className="glass">
         <h1 className="beautiful-text">{product.title}</h1>
          <img src={product.images[0]} width={100} height={100} className="mx-auto"/>
          <h2>Price: {product.price}</h2>
          <h2>Category: {product.category}</h2>
          <h2>Description: {product.description}</h2>
          <div className="flex items-center justify-evenly">
            <button className="btn btn-secondary">Order Now</button>
          </div>
        </div>
      ))}
      { error && <h1>Sorry an error occured</h1>}
      
      </div>
    </div>
  )
}
