import React from "react"
import { NavLink } from "react-router-dom"
const Categories = ({ items }) => {

  return (
    <section className="navbar-end">
      {
        items && items.map((e, k) => {
          return (
            <NavLink to={`/category/${e.id}`} className="navbar-item" key={k}>
              {e.name}
            </NavLink>
          )
        })
      }
    </section>
  )
}
export default Categories
