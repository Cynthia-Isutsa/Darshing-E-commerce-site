import React, { useContext } from 'react'
//import Link
import { Link } from 'react-router-dom'

import {IoMdArrowForward} from 'react-icons/io'
import {FiTrash2} from 'react-icons/fi'

import {Cart} from './index'
import { SidebarContext  } from '../contexts/SidebarContext/SidebarContext'

const Sidebar = () => {
   const {isOpen, handleClose} = useContext(SidebarContext)
  return (
    <div>
      Sidebar
    </div>
  )
}

export default Sidebar
