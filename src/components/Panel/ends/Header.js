import React from "react";
import { NavLink } from "react-router-dom";
const Header = () => {

  return <nav className="navbar is-dark">
    <section className="navbar-brand">
      <div className="navbar-item">
        <NavLink to="/" className="title-logo p-3"><span>ROMERO</span>Tech - Panel</NavLink>
      </div>
    </section>
  </nav>
}
export default Header