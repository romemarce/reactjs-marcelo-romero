import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import ItemCount from "./ItemCount";

const ItemDetail = ({ product }) => {
  const { title, price, pictureUrl, description, stock } = product;
  const [count, setCount] = useState(0);
  const handleClick = (type) => {
    console.log(type)
    switch (type) {
      case "increment":
        if (count + 1 <= stock) setCount(count + 1);
        else alert("Stock no disponible");
        break;
      case "decrement":
        if (count - 1 >= 0) setCount(count - 1);
        break;
      default: break;
    }
  };
  return (
    <>
      <article className="product-single">
        <img src={pictureUrl} className="product-single-img" alt={title} />
        <div className="product-content">
          <h2 className="title">{title}</h2>
          <p className="subtitle">{description}</p>
          <p className="product-single-price">${price}</p>
          <ItemCount onAdd={handleClick} count={count} />
          <NavLink to={"/cart"} className={"button is-dark mt-5"}>Agregar al carrito</NavLink>
        </div>
      </article>
    </>
  );
};
export default ItemDetail;
