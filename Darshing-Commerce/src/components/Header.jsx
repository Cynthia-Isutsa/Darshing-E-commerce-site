import React, {useContext} from 'react'
import { SidebarContext } from '../contexts/SidebarContext'
import { BsBag } from 'react-icons/bs'

const Header = () => {
  const {isOpen, setIsOpen} = useContext(SidebarContext)
  return (
    <div className='bg-pink-200 '>
      <div>
        Header
      </div>
      <div onClick= {()=> setIsOpen(!isOpen)} className='cursor-pointer flex relative'>
        <BsBag size={27} className='text-2xl fill-green-600' /></div>
    </div>
  )
}

export default Header
