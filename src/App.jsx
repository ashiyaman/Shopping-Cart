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

function App() {
  const [products, setProducts] = useState(productData)

  const addToCartHandler = (selectedProductName) => {
    console.log('...sel name/....', selectedProductName)
    const updatedProducts = products.map(product => {
      if(product.name === selectedProductName){
        console.log('...is same.....', product.name, selectedProductName)
        return {...product, isCart: true}
      }
      else {
        return product
      }
    })
    console.log('...in upd....', updatedProducts)
    setProducts(updatedProducts)
  }

  return (
    <ProductContext.Provider value={{products, addToCartHandler}}>
      
      <div style={{width: '100vw'}}>
        <Router>
          <Nav />          
          <Routes>
            <Route path='/' element={<ProductListing />} />
            <Route path='/cart' element={<Cart />} />
          </Routes>
        </Router>
      </div>
    </ProductContext.Provider>
  )
}

export default App
