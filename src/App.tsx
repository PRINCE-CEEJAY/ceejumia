import ProductList from "./features/products/components/ProductList"
import Button from "./components/custom/Button"
const App = () => {
  return (
    <div>
      {/* testing custom component */}
      <Button variant={'danger'}>Click me</Button>

      {/* rendering features */}
      <ProductList/>
    </div>
  )
}

export default App