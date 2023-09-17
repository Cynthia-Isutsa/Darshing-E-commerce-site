import React from 'react'
//import Link
import { Link } from 'react-router-dom'
import {BsPlus, BsEyeFill} from 'react-icons/bs'

const Product = ({product}) => {

const { id, image, title, category, price} = product

  return (
    <div>
      <div className='border border-[#e4e4e4] h-[300px] mb-4 relative overflow-hidden group transition'>
        <div className='w-full h-full flex justify-center items-center'>
          {/*image*/}
          <div className='w-[200px] mx-auto flex justify-center items-center' >
            <img className='max-h-[160px] group-hover:scale-110 transition duration:300' src={image} alt='product' />
          </div>
        </div>
        {/*buttons */}
        <div className='absolute top-0 right-0 bg-red-500'>
          <button>
            <div className='flex justify-center items-center w-12 text-white h-12'>
              <BsPlus className='text-3xl'/>
            </div>
          </button>
          <Link to></Link>
        </div>
      </div>
      <div>2</div>
    </div>
  )
}

export default Product
