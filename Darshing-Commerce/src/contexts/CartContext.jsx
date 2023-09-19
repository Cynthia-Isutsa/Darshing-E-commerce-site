import React, {useState, createContext, useEffect} from 'react'

export const CartContext = createContext()

const CartProvider = ({children}) => {
//state
const [cart, setCart] = useState([])
//add to cart
const addToCart  = ( id ) => {
  console.log('added to Cart')
}


  return (
    <CartContext.Provider value={{addToCart}}>
      {children}
    </CartContext.Provider>
      
  )
}

export default CartProvider
