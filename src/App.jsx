import React from 'react'

import { BrowserRouter, Routes, Route } from 'react-router-dom'


import Navbar from './Components/Navbar'
import Footer from './Components/Footer'
import HomePage from './Pages/HomePage/HomePage'
import BuildResume from './Pages/BuildResume/BuildResume'
import ResumePage from './Pages/ResumePage/ResumePage'

const App = () => {
  return (
    <div>

      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<HomePage />}/> 
          <Route path='/resumePage' element={<ResumePage />}/>
          <Route path='/buildResume' element={<BuildResume />}/>
          
        </Routes>
        
        <Footer/>
      </BrowserRouter>
    </div>
  )
}

export default App