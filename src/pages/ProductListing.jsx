import { useContext } from "react"
import CartContext from "../context/CartContext"

function ProductListing() {
    const {products, addToCartHandler} = useContext(CartContext)
    return (
        <div className='container my-5'>
            <h2>Products</h2>
            <ul className='list-group my-3'>
                {(products.filter(product => !product.isCart))
                    .map(product => (
                    <li key={product.name} className='list-group-item'>
                        <h5>{product.name}</h5>
                        <p>Price: {product.price}</p>
                        <button className='btn btn-info' onClick={() => addToCartHandler(product.name)}>Add To Cart</button>
                    </li>)) }
            </ul>
        </div>
    )
}

export default ProductListing