import React from 'react'
import { NavLink } from 'react-router-dom'

export const NavbarComponent = () => {
  return (
    <>
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
                <NavLink className='navbar-brand' to="/">FrontendTechnicalTest</NavLink>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <NavLink className='nav-item nav-link active' to="/">Github Users</NavLink>
                        <NavLink className='nav-item nav-link' to="repositories">Github Repositories</NavLink>
                    </ul>
                </div>
            </div>
        </nav>
    </>
  )
}
