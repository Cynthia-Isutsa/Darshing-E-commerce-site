import React, {useState, createContext} from 'react'

//create context
export const SidebarContext = createContext()



const SidebarProvider = ({children}) => {
//state
const [isOpen, setIsOpen] =useState(false)

const handleClose = () => {
  setIsOpen(false)
}


  return (
    <div>
      <SidebarContext.Provider value={{handleClose, isOpen, setIsOpen}}>
      {children}
    </SidebarContext.Provider>

    </div>
  )
}

export default SidebarProvider
