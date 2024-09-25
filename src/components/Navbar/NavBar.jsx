import React from 'react'
import '../Navbar/NavBar.css'

function NavBar() {
  return (
    <nav className="navbar fixed-top navbar-expand-lg bg-body-tertiary nav-bar" id="navbar">
      <div className="container">
        <a className="navbar-brand" href="#">
          <h4>SHOPIT</h4>
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <div className="navbar-nav ms-auto mb-2 mb-lg-0"> {/* ms-auto pushes items to the right */}
            <div className="d-flex gap-2">
              <button className='btn btn-primary'>
                <i className="bi bi-cart-fill"></i> Cart
              </button>
              <button className='btn btn-primary'>
                <i className="bi bi-box-arrow-in-right"></i> Login
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default NavBar;
