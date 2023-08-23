import React, { useContext } from 'react'
//import product from context
import { ProductContext } from '../contexts/ProductContext/ProductContext'

const Home = () => {
  //get products from product context
  const { products } = useContext(ProductContext)
  
  //get only men and women clothes
  const filteredProducts = products.filter(item => {
    return item.category === "men's clothing" || item.category === "women's clothing"
  })

  return (
    <div>
        <section>
            <div className = "container mx-auto">
                
            </div>
        </section>
    </div>
  )
}

export default Home
