import { doc, getDoc, getFirestore } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ErrorMessage from "./utils/ErrorMessage";
import Loading from "./utils/Loading";

const OrderContainer = () => {
  const Params = useParams()
  const orderId = Params.id || ""
  const [order, setOrder] = useState({ status: false, items: [], buyer: {}, total: 0 })
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    setLoading(true);
    const db = getFirestore();
    const item = doc(db, "orders", orderId)
    getDoc(item)
      .then((snaptshot) => {
        if (snaptshot.exists()) {
          const { total, items, buyer } = snaptshot.data()
          setOrder({ status: true, total, items, buyer })
        }
      })
      .then(() => setLoading(false))
      .catch(err => {
        console.log(err)
        setError(err);
        setLoading(false);
      })

  }, [orderId]);

  if (error) {
    return (
      <ErrorMessage
        title={"Error"}
        message={"Error al cargar el listado de productos"}
      />
    );
  }

  return (
    <main className="container">
      {loading ? <Loading /> :
        <section className="columns is-multiline is-mobile">
          {order.status ?
            <div className="column is-12 p-6">
              <h1 className="title has-text-centered"> Su nota de pedido genero correctamente </h1>
              <h2 className="subtitle mt-2"> Código de operación: {orderId} </h2>
              <hr />
              <p>Detalle del pedido: </p>
              {
                order.items.length > 0 ?
                  <table className="table is-fullwidth">
                    <thead>
                      <tr><th>Nombre</th><th>Cantidad</th><th>Precio unitario</th><th>SubTotal</th></tr>
                    </thead>
                    <tbody>
                      {order.items.map(({ amount, subtotal, price, title }, k) => {
                        return (
                          <tr key={k}>
                            <td>{title}</td>
                            <td>{amount}</td>
                            <td>${price}</td>
                            <td>${subtotal}</td>
                          </tr>
                        )
                      })}
                    </tbody>
                    <tfoot>
                      <tr>
                        <td colSpan={4}>
                          <strong>Importe total:</strong> ${order.total}
                        </td>
                      </tr>
                    </tfoot>
                  </table>
                  :
                  "Error al mostrar productos"
              }


              {
                order.buyer &&
                <>
                  <p className="mt-2">Datos del solicitante: </p>
                  <table className="table is-fullwidth">
                    <tbody>
                      <tr>
                        <th>Nombre</th>
                        <td>{order.buyer.name}</td>
                      </tr>
                      <tr>
                        <th>Telefono</th>
                        <td>{order.buyer.phone}</td>
                      </tr>
                      <tr>
                        <th>Email</th>
                        <td>{order.buyer.email}</td>
                      </tr>
                    </tbody>
                  </table>
                </>
              }
            </div>
            :
            <div className="column is-12 p-6">
              <h1 className="title has-text-centered"> Error en orden de compra </h1>
              <h2 className="subtitle mt-2"> Código de operación: "{orderId}", no pertenece a ninguna nota de pedido </h2>
            </div>
          }
        </section>
      }
    </main>
  );
}
export default OrderContainer;