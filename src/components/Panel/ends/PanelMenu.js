import React from "react"
import { NavLink } from "react-router-dom"

const PanelMenu = () => {
  return (
    <section className="box">
      <aside className="menu">
        <p className="menu-label">
          Products
        </p>
        <ul className="menu-list">
          <li><NavLink to="/panel/list-product">List product</NavLink></li>
          <li><NavLink to="/panel/add-product">Add product</NavLink></li>
        </ul>
        
        <p className="menu-label">
          Category
        </p>
        <ul className="menu-list">
          <li><NavLink to="/panel/list-category">List category</NavLink></li>
          <li><NavLink to="/panel/add-category">Add category</NavLink></li>
        </ul>
        
        <p className="menu-label">
          Order
        </p>
        <ul className="menu-list">
          <li><NavLink to="/panel/list-order">Lists order</NavLink></li>
        </ul>
      </aside>
    </section>
  )
}
export default PanelMenu