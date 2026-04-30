
export default function ProductItem({product}) {
  return (
    <div key={product.id} className="glass cursor-pointer text-center">
    <h1 className="text-center text-xl uppercase font-bold underline text-green-600">{product.title}</h1>
    <img src={product.images[0]} width={200} height={200} alt="product-image" className="mx-auto"/>
    <h3 className="text-center">Price: ${product.price}</h3>
    <h4>Category: {product.category}</h4>
    <p className="italic">Description: {product.description}</p>
    <button className="px-6 py-1 bg-orange-400 rounded-lg hover:bg-transparent hover:border-2 cursor-pointer ">Order Now</button>
  </div>
  )
}
