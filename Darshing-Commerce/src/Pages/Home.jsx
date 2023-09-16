import React, { useContext } from 'react'
//import product context
import { ProductContext } from '../contexts/ProductContext'


const Home = () => {

  const {products} = useContext(ProductContext)
  console.log(products)
  
  return (
    <div>
      Home Page
    </div>
  )
}

export default Home
