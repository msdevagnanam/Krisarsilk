import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Navbar from './components/Common/Navbar'
import Footer from './components/Common/Footer'
import Newarrival from './pages/Newarrival'
import Ourproduct from './pages/Ourproduct'
import Silksaree from './pages/Silksaree'
import Contacts from './pages/Contacts'
import Refundpolicys from './pages/Refundpolicys'
import SocialSidebar from './components/Common/SocialSidebar'
const App = () => {
  return (
    <>
    <BrowserRouter>
    <Navbar />
    <SocialSidebar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/newarrivals' element={<Newarrival />} />
        <Route path='/ourproducts' element={<Ourproduct />} />
        <Route path='/silksarees' element={<Silksaree />} />
        <Route path='/contacts' element={<Contacts />} />
        <Route path='/refundpolicys' element={<Refundpolicys />} />
      </Routes>
    <Footer />
    </BrowserRouter>
      
    </>
  )
}

export default App
