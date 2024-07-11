import React from 'react'
import { NavLink } from 'react-router-dom'

export const NavbarComponent = () => {
  return (
    <>
        <nav class="navbar navbar-expand-lg bg-body-tertiary">
            <div class="container-fluid">
                <NavLink className='navbar-brand' to="/">FrontendtechnicalTest</NavLink>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav">
                        <NavLink className='nav-item nav-link active' to="/">Github Users</NavLink>
                        <NavLink className='nav-item nav-link' to="repositories">Github Repositories</NavLink>
                    </ul>
                </div>
            </div>
        </nav>
    </>
  )
}
