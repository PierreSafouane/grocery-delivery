import React from "react"

export const Navbar = () =>{
    return(
            <nav className="navbar navbar-light bg-light navColor fixed-top">
              <div className="container-fluid">
                <a href="#" className="navbar-brand"><i className="fas fa-carrot"></i> Mes Courses en Ligne</a>
                <form className="d-flex">
                  <input className="form-control me-2" type="search" placeholder="Rechercher" aria-label="Search"/>
                </form>
              </div>
            </nav>
    )
  }