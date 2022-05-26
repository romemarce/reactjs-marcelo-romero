import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AllContext } from "../Context/AllContext";
import deleteIcon from "./../../assets/img/delete-icon.png"


import ErrorMessage from "./utils/ErrorMessage";

const CartListContainer = () => {
  const { cartList } = useContext(AllContext)
  const { cart, removeItem, clearItems } = cartList

  let totalCarrito = 0
  if (cart.length > 0) cart.map(e => totalCarrito += e.amount * e.price)

  return (
    <main className="contaier">
      <section className="columns is-multiline is-mobile">
        <section className="column is-12">
          {cart.length > 0 ?
          <table className="table" style={{ width: "100%", maxWidth: "80%", margin: "10px auto" }}>
            <thead>
              <tr>
                <th>Id</th>
                <th>Imagen</th>
                <th>Producto</th>
                <th>Precio</th>
                <th>Cantidad</th>
                <th>SubTotal</th>
                <th style={{ width: "5%" }}></th>
              </tr>
            </thead>
            <tbody>
              {
                cart.map(({ id, title, price, pictureUrl, amount }) =>
                  <tr key={id} className="table-tr">
                    <th>{id}</th>
                    <th><img src={pictureUrl} width="100px" alt={title} /></th>
                    <th>{title}</th>
                    <th>${price}</th>
                    <th>{amount}</th>
                    <th>${price * amount}</th>
                    <td>
                      <img onClick={() => removeItem(id)} src={deleteIcon} alt="remove" className="pt-5" />
                    </td>
                  </tr>
                )
              }
            </tbody>
            <tfoot>
              <tr>
                <th colSpan={2}>
                  Cupon de descuento:
                  <input disabled style={{ maxWidth: "400px", display: "block" }} className="input" type="text" placeholder="Código de descuento..." />
                </th>
                <th colSpan={3}>
                  Limpiar carrito:
                  <button style={{ display: "block" }} className="button" onClick={clearItems}>Vaciar</button>
                </th>
                <th colSpan={2}>Total: ${totalCarrito}
                  <button className="button mt-3 is-dark" style={{ display: "block" }}>Finalizar compra</button>
                </th>
              </tr>
            </tfoot>
          </table>: <ErrorMessage title="Carrito vacio" message={
            <p>No hay productos en su carrito. <Link to="/">Volver a la tienda</Link></p>
          } />}
        </section>
      </section>
    </main>
  );
};
export default CartListContainer;
