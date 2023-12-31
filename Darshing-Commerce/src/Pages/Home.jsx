import React, { useContext } from 'react'
//import product context
import { ProductContext } from '../contexts/ProductContext'
import { Product } from '../components'


const Home = () => {

  const {products} = useContext(ProductContext)

   
//get onl men's and women's clothing 
const filteredProducts = products.filter((item) =>{
  return (
    item.category === "men's clothing" || item.category === "women's clothing"
    )
})

  return (
    <section className='py-16'>
      <div className='container mx-auto'>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-[30px] max-w-sm mx-auto md:max-w-none md:mx-0'>
          {filteredProducts.map((product) =>{
            return(
              <Product product={product}  key={product.id}/>
            )
          })}

        </div>
      </div>
    </section>
  )
}

export default Home
