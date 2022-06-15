import React, { useContext, useEffect, useState } from "react";
import { AllContext } from "../Context/AllContext";
import ItemCount from "./ItemCount";

const ItemDetail = ({ product }) => {
  const { title, price, pictureUrl, description, stock } = product;
  const [stockEnable, setStockEnable] = useState(1)
  const [count, setCount] = useState(1);

  useEffect(() => {
    setStockEnable(stock)
  }, [product])


  const { addItem } = useContext(AllContext).cartList

  const handleAddProduct = () => {
    addItem({ ...product, amount: count })
    setStockEnable(stockEnable - count)
    if (stockEnable - count > 0)
      setCount(1)
    else
      setCount(0)
  }
  const handleClick = (type) => {
    switch (type) {
      case "increment":
        if (count + 1 <= stockEnable) setCount(count + 1);
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
          <p>{stockEnable > 1 ? `${stockEnable} unidades disponibles` : ` ${stockEnable} unidad disponible`} </p>
          <button className="button is-dark mt-5" onClick={handleAddProduct}>Agregar al carrito</button>
        </div>
      </article>
    </>
  );
};
export default ItemDetail;
