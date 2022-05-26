import React, { useContext } from "react";
import { AllContext } from "../Context/AllContext";
import deleteIcon from "./../../assets/img/delete-icon.png"

const CartListContainer = () => {
  const { cartList } = useContext(AllContext)
  const { cart, removeItem, clearItems } = cartList

  return (
    <main className="contaier">
      <section className="columns is-multiline is-mobile">
        <section className="column is-12">
          <table className="table" style={{ width: "100%", maxWidth: "80%", margin: "10px auto" }}>
            <thead>
              <tr>
                <th>Id</th>
                <th>Imagen</th>
                <th>Producto</th>
                <th>Precio</th>
                <th>Cantidad</th>
                <th>SubTotal</th>
                <th style={{width: "5%"}}></th>
              </tr>
            </thead>
            <tfoot>
              <tr>
                <th colSpan={5}>
                  Cupon de descuento:
                  <input style={{ maxWidth: "400px", display: "block" }} className="input" type="text" placeholder="Código de descuento..." />
                </th>
                <th>Total: $500
                  <button className="button mt-3 is-dark" style={{ display: "block" }}>Finalizar compra</button>
                </th>
              </tr>
            </tfoot>
            <tbody>
              {
                cart && cart.map(({ id, title, price, pictureUrl, amount }) =>
                  <tr key={id} className="table-tr">
                    <th>{id}</th>
                    <th><img src={pictureUrl} width="100px" alt={title} /></th>
                    <th>{title}</th>
                    <th>${price}</th>
                    <th>{amount}</th>
                    <th>${price}</th>
                    <td>
                      <img onClick={()=>removeItem(id)} src={deleteIcon} alt="remove" className="pt-5" />
                    </td>
                  </tr>
                )
              }
            </tbody>
          </table>
          <button className="button" onClick={clearItems}> Limpiar carrito </button>
        </section>
      </section>
    </main>
  );
};
export default CartListContainer;
