import { useFormik } from "formik";
import React, { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AllContext } from "../Context/AllContext";
import CartTable from "./CartTable";
import ErrorInput from "./utils/ErrorInput";
import ErrorMessage from "./utils/ErrorMessage";

import {addDoc, collection, getFirestore} from "firebase/firestore"

const CartListContainer = () => {
  const navigate = useNavigate();
  const { cartList } = useContext(AllContext);
  const { cart, removeItem, clearItems } = cartList;
  const [order, setOrder] = useState({ total: 0 });

  useEffect(() => {
    if (cartList.cart.length > 0) {
      let items = [];
      let total = 0;
      // eslint-disable-next-line
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
  // Validate form
  const validate = values => {
    const errors = {};
    if (!values.name) {
      errors.name = 'Falta completar';
    } else if (values.name.length > 15) {
      errors.name = 'Escriba menos de 15 caracteres';
    }

    if (!values.phone) {
      errors.phone = 'Falta completar';
    } else if (values.phone.length > 15) {
      errors.phone = 'Escriba menos de 15 caracteres';
    }

    if (!values.email) {
      errors.email = 'Falta completar';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
      errors.email = 'Email invalido';
    }

    return errors;
  };
  const formik = useFormik({
    initialValues: { name: "", email: "", phone: "" }, validate, onSubmit: values => {
      setOrder({ ...order, buyer: values })
      sendData( values )
    }
  })

  const sendData = ( buyer = {} ) => {
    const db = getFirestore();
    const orderCollection = collection(db, "orders");

    const docData = {...order, buyer}


    addDoc(orderCollection, docData)
    .then(({id})=> navigate(`/order/${id}`) )
    .catch(err => console.log(err))
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
            <form className="column is-12 mb-5 boxes" onSubmit={formik.handleSubmit}>
              <article className="card box">
                <h1 className="subtitle">Billing details </h1><hr />
                <input
                  id="name"
                  name="name"
                  onChange={formik.handleChange}
                  value={formik.values.name}
                  className="input mt-2"
                  type="text"
                  placeholder="Fullname"
                />
                {formik.errors.name ? <ErrorInput title={formik.errors.name} /> : null}

                <input
                  className="input mt-2"
                  id="phone"
                  name="phone"
                  onChange={formik.handleChange}
                  value={formik.values.phone}
                  type="text"
                  placeholder="Phone"
                />
                {formik.errors.phone ? <ErrorInput title={formik.errors.phone} /> : null}
                <input
                  id="email"
                  name="email"
                  type="email"
                  onChange={formik.handleChange}
                  value={formik.values.email}
                  className="input mt-2"
                  placeholder="Email"
                />
                {formik.errors.email ? <ErrorInput title={formik.errors.email} /> : null}
              </article>

              <article className="card box">
                <h1 className="subtitle">Cart totals</h1><hr />
                <table width="100%">
                  <tbody>
                    <tr>
                      <th>Total</th>
                      <td>${order.total}</td>
                    </tr>
                    <tr>
                      <td colSpan="2" className="has-text-centered">
                        <button
                          type="submit"
                          className="mt-5 button is-info is-fullwidth"
                        >
                          SEND ORDER
                        </button>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </article>
            </form>
          </>
        ) : (
          <section className="column is-12">
            <ErrorMessage
              title="Carrito vacio"
              message={
                <p>
                  No hay productos en su carrito.
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
