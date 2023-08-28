import React from 'react'

import { BrowserRouter, Routes, Route } from 'react-router-dom'


import Navbar from './Components/Navbar'
import Footer from './Components/Footer'
import HomePage from './Pages/HomePage/HomePage'
import BuildResume from './Pages/BuildResume/BuildResume'
import ResumePage from './Pages/ResumePage/ResumePage'
import BuildResume2 from './Pages/BuildResune2/BuildResume2'
import BuildResume3 from './Pages/BuildResume3/BuildResume3'
import BuildResume4 from './Pages/BuildResume4/BuildResume4'
import BuildResume5 from './Pages/BuildResume5/BuildResume5'

const App = () => {
  return (
    <div>

      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<HomePage />}/> 
          <Route path='/resumePage' element={<ResumePage />}/>
          <Route path='/buildResume' element={<BuildResume />}/>
          <Route path='/buildResume2' element={<BuildResume2/>}/>
          <Route path='/buildResume3' element={<BuildResume3/>}/>
          <Route path='/buildresume4' element={<BuildResume4/>}/>
          <Route path='/buildresume5' element={<BuildResume5/>}/>
          
        </Routes>
        
        <Footer/>
      </BrowserRouter>
    </div>
  )
}

export default App