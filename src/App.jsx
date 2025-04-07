import { BrowserRouter as Router, Routes, Route, RouterProvider } from "react-router-dom"

import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import Nav from "./components/Nav"
import ProductListing from "./pages/ProductListing"
import Cart from "./pages/Cart"
import { useContext, useState } from "react"
import ProductContext from "./context/CartContext"

const productData = [
  {
    name: 'Product 1',
    price: '$100',
    isCart: false
  },
  {
    name: 'Product 2',
    price: '$150',
    isCart: false
  },
  {
    name: 'Product 3',
    price: '$200',
    isCart: false
  },
  {
    name: 'Product 4',
    price: '$220',
    isCart: false
  },
]

function CartProvider({children}) {
  const [products, setProducts] = useState(productData)

  const addToCartHandler = (selectedProductName) => {
    const updatedProducts = products.map(product => {
      if(product.name === selectedProductName){
        return {...product, isCart: true}
      }
      else {
        return product
      }
    })
    setProducts(updatedProducts)
  }

  return (
    <ProductContext.Provider value={{products, addToCartHandler}}>
      {children}
    </ProductContext.Provider>)
}

function App() {
  return (
    <CartProvider>  
        <Router>
          <Nav />          
          <Routes>
            <Route path='/' element={<ProductListing />} />
            <Route path='/cart' element={<Cart />} />
          </Routes>
        </Router>
    </CartProvider>
  )
}

export default App
