import React from 'react'
import deleteIcon from "./../../assets/img/delete-icon.png";
const CartTable = ({ cart, removeItem, clearItems }) => {
  return (
    <section className='cart-table'>
      <table className="table">
        <thead>
          <tr>
            <th width="100px">Imagen</th>
            <th>Producto</th>
            <th>Precio</th>
            <th>Cantidad</th>
            <th>SubTotal</th>
            <th style={{ width: "5%" }}></th>
          </tr>
        </thead>
        <tbody>
          {cart.map(({ id, title, price, pictureUrl, amount }) => (
            <tr key={id} className="table-tr">
              <th>
                <img src={pictureUrl} width="100px" alt={title} />
              </th>
              <th>{title}</th>
              <th>${price}</th>
              <th>{amount}</th>
              <th>${price * amount}</th>
              <td>
                <img
                  onClick={() => removeItem(id)}
                  src={deleteIcon}
                  alt="remove"
                  className="pt-5"
                />
              </td>
            </tr>
          ))}
        </tbody>
        <tfoot>
          <tr>
            <th colSpan={6} className="has-text-right">
              <button
                className="button is-danger"
                onClick={clearItems}
              >
                Limpiar carrito
              </button>
            </th>
          </tr>
        </tfoot>
      </table>
    </section>
  );
};
export default CartTable;
