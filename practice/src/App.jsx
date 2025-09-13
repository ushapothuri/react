import ProductCard from "./ProductCard.jsx"

function App() {
  const productName="pen"
  const price=10
  const isAvailable=true
  
  return (
    <>
    <div>

     <ProductCard a={productName} b={price} c={isAvailable} /> 
    </div>


    </>
  )
}

export default App
