import { useGetProductsQuery } from "../productApi"
import { useState } from "react"
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
    <div className="container min-w-screen p-4">
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
      <div className="grid grid-cols-3 gap-3">      
        { isLoading ? <h1>Loading ...</h1>:
          selectectedData.map((product)=>(
            <div key={product.id} className="glass cursor-pointer text-center">
              <h1 className="text-center text-xl uppercase font-bold underline text-green-600">{product.title}</h1>
              <img src={product.images[0]} width={200} height={200} alt="product-image" className="mx-auto"/>
              <h3 className="text-center">Price: ${product.price}</h3>
              <h4>Category: {product.category}</h4>
              <p className="italic">Description: {product.description}</p>
              <button className="px-6 py-1 bg-orange-400 rounded-lg hover:bg-transparent hover:border hover:border-2 cursor-pointer ">Order Now</button>
            </div>
          ))
        }

        {
          error && <h1>Error occured while fetching data </h1>
        }
      </div>
    </div>
  )
}

export default ProductList