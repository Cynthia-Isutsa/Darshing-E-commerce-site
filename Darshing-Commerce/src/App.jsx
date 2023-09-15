import React from 'react'
import { Footer, Header, Sidebar } from './components'
//import react router dom
import { BrowserRouter as Router, Route, Routes  } from 'react-router-dom'
import { Home, ProductDetails } from './Pages'

const App = () => {
  return (
    <div className='overflow-hidden'>
    <Header />
    <Router>
      <Routes>
        <Route path= '/' element ={<Home />} />
        <Route path= '/product/:id'  element = {<ProductDetails />}/>
      </Routes>
    </Router>
    <Sidebar />
    <Footer />
    </div>
  )
}

export default App
