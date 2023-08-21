import React from 'react'
import { Footer, Header, Sidebar } from './components'
//import react router dom
import { BrowserRouter as Router, Route, Routes  } from 'react-router-dom'
import { Home, ProductDetails } from './Pages'

const App = () => {
  return (
    <div className='overflow-hiddens'>
     <Sidebar />
     <Header />
     <Footer />
    </div>
  )
}

export default App
