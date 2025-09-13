import ProductCard from "./ProductCard.jsx"
import Card from "./Card.jsx"
import BlogPost from "./BlogPost.jsx"

function App() {
  const productName = "Pen"
  const price = 10
  const isAvailable = true

  const Product = [
    {
      productName: "product1",
      price: 3000,
      isAvailable: true
    }, {
      productName: "product2",
      price: 6000,
      isAvailable: true
    }, {
      productName: "product2",
      price: 6000,
      isAvailable: true
    }
  ]

  const Posts = [
    {
      id:1,
      author: "usha",
      title: "hello",
      description: "abcd"
    },
    {
      id:2,
      author: "usha",
      title: "hello",
      description: "abcd"
    },
    {
      id:3,
      author: "usha",
      title: "hello",
      description: "abcd"
    }

  ]

  return (
    <>
      <div className="c">

        {/* <ProductCard a={productName} b={price} c={isAvailable} /> */}
        {/* <ProductCard a={productName} b={price} c={!isAvailable} /> */}
        {


          // Product.map((product) => (
          //   <ProductCard
          //     productName={product.productName}
          //     productPrice={product.productPrice}
          //     isAvailability={product.isAvailable}
          //   />

          // ))

         Posts.map((post) => (
        <BlogPost
        key={post.id}
          author={post.author}
          title={post.title}
          description={post.description}
        />

        ))
        }








      </div>

    </>
  )
}

export default App
