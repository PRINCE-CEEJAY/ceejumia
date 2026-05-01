import { useGetProductsQuery } from "../productApi"
import { useState } from "react"
import ProductItem from "./ProductItem"

const ProductList = () => {
  const { data, isLoading, error } = useGetProductsQuery('')
  const [selectedItem, setSelectedItem] = useState('all')

  const categories = ['all', 'beauty', 'fragrances', 'furniture', 'groceries']

  //filter selection
  const selectectedData = data?.products?.filter(item => {
    if(selectedItem === 'all') return true
    return item.category === selectedItem.toLowerCase()
  }
)
 
  return (
    <div className="min-w-screen p-4 mt-12">
      <h1 className="beautiful-text">PRODUCTS LIST</h1> 
      <div 
      className="flex items-center w-sm space-x-2 max-w-lg p-2 bg-zinc-500 font-semibold text-white rounded-md mb-8"
      >
        <h2>Select Category: </h2>
        <select value={selectedItem} onChange={(e)=>setSelectedItem(e.target.value)}
        className="grow p-2 bg-zinc-500"       
          >
            {
              categories.map((item, index)=> (
                <option key={index}>{item.toUpperCase()}</option>
              ))            
            }
        </select>  
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">      
        { isLoading ? <h1>Loading ...</h1>:
          selectectedData?.map((product)=>(
           <ProductItem key={product.id} product={product}/>
          ))
        }
        {error && <h1 className="text-center animate-pulse">Error occured while fetching data </h1>  }
      </div>
    </div>
  )
}

export default ProductList