import { useContext } from "react"
import CartContext from "../context/CartContext"

function Cart() {
    const {products} = useContext(CartContext)

    return (
        <div className='container my-5'>
            <h2>Cart</h2>
            {((products.filter(product => product.isCart)).length === 0 ) 
                ? 
                (<p>Your cart is empty.</p>)            
                :          
               ( 
                <ul className='list-group my-3'>
                    {(products.filter(product => product.isCart))
                        .map(product => (
                        <li key={product.name} className='list-group-item'>
                            <h5>{product.name}</h5>
                            <p>Price: {product.price}</p>
                        </li>)
                    ) }
                </ul>
                )
            }
        </div>
    )
}

export default Cart