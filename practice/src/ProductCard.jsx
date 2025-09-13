function ProductCard({a,b,c})
{
    return(
        <div>
            <p>Product Name :{a}</p>
            <p>price:{b}</p>
            <p>{ {c}? "yes":"no"}</p>
        </div>
    )
}

export default ProductCard