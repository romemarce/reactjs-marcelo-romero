import React, { useContext, useEffect } from "react"
import { useState } from "react";
import { NavLink } from "react-router-dom"
import CartWidget from "./CartWidget"
import Categories from "./Categories"

import listCategories from "./../../assets/data/categories.json";
import { AllContext } from "../Context/AllContext";


const NavBar = () => {
  const { cartList } = useContext(AllContext)
  const { cart } = cartList

  const [cardCount, setCardCount] = useState(0)

  useEffect(() => {
    let cant = 0;
    cart.map(e => cant += e.amount)

    setCardCount(cant)
  }, [cart])

  const [menu, setMenu] = useState(true)
  const toggleMenu = () => {
    setMenu(!menu)
  }

  return (
    <nav className="navbar is-dark">
      <section className="navbar-brand">
        <div className="navbar-item">
          <NavLink to="/" className="title-logo p-3"><span>ROMERO</span>Tech</NavLink>
        </div>
        <button onClick={toggleMenu} className="navbar-burger" aria-label="menu" aria-expanded="false">
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </button>
      </section>
      <section className={menu ? "navbar-menu" : "navbar-menu is-active"} >
        <Categories items={listCategories} />
        <section className="navbar-end">
          {cardCount > 0 &&
            <NavLink to="/cart" className="navbar-item mr-5">
              <CartWidget count={cardCount} />
            </NavLink>
          }
        </section>
      </section>
    </nav>
  );
}
export default NavBar