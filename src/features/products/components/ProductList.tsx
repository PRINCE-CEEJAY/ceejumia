import { useGetProductsQuery } from "../productApi"

const ProductList = () => {
  const { data, isLoading, error } = useGetProductsQuery()

  setTimeout(()=>{
    console.log(data.products)
  },1000)
  return (
    <div>
      
      
    </div>
  )
}

export default ProductList