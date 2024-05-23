import React from 'react'
import Navbar from './components/navbar/Navbar'
import { Route, Routes } from 'react-router-dom'
import Hero from './components/hero/Hero'
import Rent from './components/rent/Rent'
import Content from './components/content/Content'
import Compo from './components/compo/Compo'
import Footer from './components/footer/Footer'

const App = () => {
  return (
    <div>
      <Navbar />
      {/* <Routes>
        <Route path='/' element={<Beranda/>} />
        <Route path='/sewa' element={<Sewa/>} />
      </Routes> */}
      <Hero />
      <Rent />
      <Content />
      <Compo />
      <Footer />
    </div>
  )
}

export default App