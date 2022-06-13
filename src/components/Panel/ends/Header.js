import React from "react";
import { NavLink } from "react-router-dom";
const Header = ({ user }) => {
  const { email = "", isLogin = false } = user
  
  return <nav className="navbar is-dark">
    <section className="navbar-brand">
      <div className="navbar-item">
        <NavLink to="/panel" className="title-logo p-3"><span>ROMERO</span>Tech - Panel</NavLink>
      </div>
      <div className="navbar-end">
        {isLogin && <div className="navbar-item">
          {email}
          <button>Logout</button>
        </div>}

      </div>
    </section>
  </nav>
}
export default Header