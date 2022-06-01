import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { AllContext } from "../Context/AllContext";
import CartTable from "./CartTable";
import ErrorMessage from "./utils/ErrorMessage";

const CartListContainer = () => {
  const { cartList } = useContext(AllContext);
  const { cart, removeItem, clearItems } = cartList;
  const [buyer, setBuyer] = useState({});
  const [order, setOrder] = useState({ total: 0 });
  // // console.log(cart)
  useEffect(() => {
    if (cartList.cart.length > 0) {
      let items = [];
      let total = 0;
      cartList.cart.map(({ id, title, price, amount }) => {
        total += amount * price;
        items.push({
          id,
          title,
          amount,
          price,
          subtotal: amount * price,
        });
      });
      setOrder({ ...order, items, total });
    }
  }, [cartList]);

  const handleChange = (e) => {
    setOrder({
      ...order,
      buyer: { ...order.buyer, [e.target.name]: e.target.value },
    });
  };

  const sendData = () => {
    console.log(order);
  };

  return (
    <main className="contaier">
      <section className="columns is-multiline is-mobile is-justify-content-space-evenly">
        {cart.length > 0 ? (
          <>
            <section className="column is-12">
              <CartTable
                cart={cart}
                removeItem={removeItem}
                clearItems={clearItems}
              />
            </section>
            <section className="column is-4 mb-5">
              <article className="box">
                <h1 className="card-header subtitle">Billing details</h1>
                <input
                  onChange={handleChange}
                  className="input"
                  type="text"
                  placeholder="Fullname"
                  name="name"
                />
                <input
                  onChange={handleChange}
                  className="input mt-3"
                  type="text"
                  placeholder="Phone"
                  name="phone"
                />
                <input
                  onChange={handleChange}
                  className="input mt-3"
                  type="email"
                  placeholder="Email"
                  name="email"
                />
              </article>
            </section>
            <section className="column is-4">
              <article className="box">
                <h1 className="card-header subtitle">Cart totals</h1>
                <table width="100%">
                  <tbody>
                    <tr>
                      <th>Total</th>
                      <td>${order.total}</td>
                    </tr>
                    <tr>
                      <td colSpan="2" className="has-text-centered">
                        <button
                          onClick={sendData}
                          className="mt-5 button is-info is-fullwidth"
                        >
                          SEND ORDER
                        </button>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </article>
            </section>
          </>
        ) : (
          <section className="column is-12">
            <ErrorMessage
              title="Carrito vacio"
              message={
                <p>
                  No hay productos en su carrito.{" "}
                  <Link to="/">Volver a la tienda</Link>
                </p>
              }
            />
          </section>
        )}
      </section>
    </main>
  );
};
export default CartListContainer;
