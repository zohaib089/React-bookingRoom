import React from 'react'
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
      <div className="container">
        <Link to='/rentals' className="navbar-brand">Rent A Place</Link>
        <form action="" className="form-inline my-2 my-lg-0">
          <input type="search" placeholder="Try 'Turin'" aria-label="Search" className="form-control mr-sm-2 bwm-search" />
          <button className="btn btn-outline-success my-2 my-sm-0 btn-bwm-search" type="submit">Search</button>
        </form>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="#navbarNavAltMarkup">
          <div className="navbar-nav ml-auto">
            <Link to='/login' className="nav-item nav-link active">Login
          <span className="sr-only">(current)</span>
            </Link>
            <Link to='/register' className="nav-item nav-link">Register</Link>
          </div>
        </div>
      </div>


    </nav>
  )
}

export default Header
