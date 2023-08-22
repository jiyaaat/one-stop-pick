import React from 'react';
import { NavLink } from 'react-router-dom';
import { UseSelector, useSelector } from 'react-redux';

const Navbar=()=>{
  const state = useSelector((state)=>state.handleCart)
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary"data-bs-theme="dark">
        <div className="container-fluid">
          <NavLink className="navbar-brand"  to="/">ONE STOP PICK</NavLink>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav mx-auto">
              <li className="nav-item">
                <NavLink className="nav-link" aria-current="page"  to="/">HOME</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link"  to="products">PRODUCTS</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link"  to="/about">ABOUT US</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link"  to='/contact'>CONTACT</NavLink>
              </li>
            </ul>
            <div className="buttons">
              <NavLink to="/login" className="btn btn-light ms-2">login</NavLink>
              <NavLink to="/logout" className="btn btn-light ms-2">logout</NavLink>
              <NavLink to="/cart" className="btn btn-light ms-2">cart({state.length})</NavLink>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;