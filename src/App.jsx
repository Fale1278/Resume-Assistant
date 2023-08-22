import React from 'react'
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'
import HomePage from './Pages/HomePage/HomePage'
import BouncingDiv from './Components/BouncingDiv'

const App = () => {
  return (
    <div>
      <Navbar />
      <HomePage />
      <BouncingDiv />
      <Footer/>
    </div>
  )
}

export default App