import ProductList from "./features/products/components/ProductList"
import Footer from "./main/Footer"
import Navbar from "./main/Navbar"
const App = () => {
  return (
    <div className="fixed inset-0 min-h-screen">   
    <Navbar/>
 
      {/* rendering features */}
      <ProductList/>

    <Footer/>
    </div>
  )
}

export default App