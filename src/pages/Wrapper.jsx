import React from 'react'
import NavBar from '../components/Navbar/NavBar.jsx'
import Products from '../components/Products/Products.jsx'
import Footer from '../components/Footer/Footer.jsx'
import Hero from '../components/Hero/Hero.jsx'

function Wrapper() {
  return (
    <>
      <NavBar />
      <Hero />
      <Products />
      <Footer />
    </>
  )
}

export default Wrapper