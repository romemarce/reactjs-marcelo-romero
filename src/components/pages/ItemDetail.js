import React, { useContext, useState } from "react";
import { AllContext } from "../Context/AllContext";
import ItemCount from "./ItemCount";

const ItemDetail = ({ product }) => {
  const { title, price, pictureUrl, description, stock } = product;
  const [count, setCount] = useState(1);

  const { addItem } = useContext(AllContext).cartList

  const handleAddProduct = ()=>{
    addItem( {...product, amount: count} )
    setCount(1)
  }
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
          <button className="button is-dark mt-5" onClick={handleAddProduct}>Agregar al carrito</button>
        </div>
      </article>
    </>
  );
};
export default ItemDetail;
