import { useContext } from "react"
import { Link } from "react-router-dom"
import CartContext from "../context/CartContext"

function Nav() {
    const {products} = useContext(CartContext)
    return (
        <nav className='bg-dark text-light'>
            <div className='container d-flex justify-content-between py-3'>
                <a className='navbar-brand' href='/'>Shopping Cart</a>
                <ul className='navbar-nav d-flex flex-row'>
                    <li className='mx-2'>
                        <Link to='/'>Products</Link>
                    </li>
                    <li>
                        <Link to='/cart'>Cart({(products.filter(product => product.isCart)).length})</Link>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Nav