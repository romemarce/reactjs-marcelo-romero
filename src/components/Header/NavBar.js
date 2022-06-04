import React, { useContext, useEffect } from "react"
import { useState } from "react";
import { NavLink } from "react-router-dom"
import CartWidget from "./CartWidget"
import Categories from "./Categories"

import { AllContext } from "../Context/AllContext";
import { collection, getDocs, getFirestore } from "firebase/firestore"

import orderIcon from "./../../assets/img/order-icon.png";

const NavBar = () => {
  const { cartList } = useContext(AllContext)
  const { cart } = cartList

  const [cardCount, setCardCount] = useState(0)
  const [listCategories, setListCategories] = useState([])

  useEffect(() => {
    const db = getFirestore();
    const itemCollection = collection(db, "categories");
    getDocs(itemCollection)
      .then(({ docs }) => {
        setListCategories(docs.map(doc => ({ id: doc.id, ...doc.data() })))
      })
      .catch(err => console.log(err))
  }, [])

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
            <NavLink to="/cart" className="navbar-item mr-2">
              <CartWidget count={cardCount} />
            </NavLink>
          }
          <NavLink to="/order" className="navbar-item mr-5">
            <section className="cart-widget">
              <img src={orderIcon} alt="carrito" />
            </section>
          </NavLink>
        </section>
      </section>
    </nav>
  );
}
export default NavBar