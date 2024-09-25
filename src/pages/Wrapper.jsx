import React from 'react'
import NavBar from '../components/Navbar/NavBAr'
import Products from '../components/Products/Products'
import Footer from '../components/Footer/Footer'
import Hero from '../components/Hero/HEro'

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