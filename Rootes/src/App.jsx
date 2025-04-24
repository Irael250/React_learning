import { useState } from 'react'
import { Route,Routes,Router } from 'react-router-dom'
import Home from './Pages/Home'
import Navbar from './Navbar.jsx'
import Exercise from './Pages/Exercise.jsx'
import Services from './Pages/Services.jsx'
import About from './Pages/About.jsx'
import Footer from './assets/Footer.jsx'
import FectData from './Pages/FectData.jsx'





function App() {

  return (
    <>

      <Navbar/>
  

      <Routes>
         <Route path='/home' element={<Home/>}/>
         <Route path='/Forms' element={<About/>}/>
         <Route path='/Events' element={<Services/>}/>
         
      </Routes>
      

      <Footer/>
    </>
  )
}
export default App
