import React from 'react'
import '../Hero/Hero.css'

function Hero() {
  return (
    <div className="bg-dark py-4" >
      <div className="container" id="hero-area">
        <h1 className="text-center text-white" id="header-text-one"> Shop in Style </h1>
        <p className="text-center text-white-50" id="header-text-two"><i className="bi bi-arrow-return-right"></i> Make Your Choice <i className="bi bi-arrow-return-left"></i></p>
      </div>
    </div>
  )
}

export default Hero