import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { AllContext } from "../../Context/AllContext";
const Header = () => {
  const { userPanel } = useContext(AllContext);
  const { user, setUser } = userPanel
  
  const handleLogout = ()=>{
    setUser({isLogin: false, email: ""})
  }

  return <nav className="navbar is-dark">
    <section className="navbar-brand">
      <div className="navbar-item">
        <NavLink to="/panel" className="title-logo p-3"><span>ROMERO</span>Tech - Panel</NavLink>
      </div>
      <div className="navbar-end">
        <div className="navbar-item">{user.email}</div>
        <div className="navbar-item">
          <NavLink to="/" className="button">Visitar sitio web</NavLink>
        </div>
        <div className="navbar-item">
          <button className="button" onClick={handleLogout}>Logout</button>
        </div>
      </div>
    </section>
  </nav>
}
export default Header