import React from "react"
import { NavLink } from "react-router-dom"
const Categories = ({ items }) => {
  console.log(items)
  return (
    <section className="navbar-end">
      {
        items && items.map((e, k) => {
          return (
            <NavLink to={`/category/${e.slug}`} className="navbar-item" key={k}>
              {e.title}
            </NavLink>
          )
        })
      }
    </section>
  )
}
export default Categories
