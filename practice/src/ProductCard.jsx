import  "./ProductCard.css"

function ProductCard(product)
{
   
    return(
        <div className="card">
      
            <p className="name">Product Name :{product.a}</p>
            <p className="price">price:{product.b}</p>
            {product.c===true?<p className="available"> In Stock</p>:<p className="notavailable">Out of Stock</p>}       
          
        </div>
    )
}

export default ProductCard