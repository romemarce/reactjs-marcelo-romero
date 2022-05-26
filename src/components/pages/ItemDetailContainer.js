import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "./ItemDetail";
import ErrorMessage from "./utils/ErrorMessage";
import Loading from "./utils/Loading";

import listProduct from "./../../assets/data/products.json";

const ItemDetailContainer = () => {
  const { id } = useParams()
  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const getItem = (id) =>
    new Promise((res, rej) => {
      setTimeout(() => {
        if (true) {
          listProduct.forEach(e => {
            if (parseInt(e.id) === parseInt(id)) {
              res(e)
            }
          })
        } else { rej("Error") };
      }, 1000);
    });

  useEffect(() => {
    setLoading(true);
    getItem(id)
      .then((result) => {
        setProduct(result);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setError(err);
        setLoading(false);
      });
  }, [id]);
  if (error) {
    return (
      <ErrorMessage
        title={"Error"}
        message={"Error al cargar el listado de productos"}
      />
    );
  }
  return (
    <main className="contaier">
      {loading ? <Loading /> :
        <section className="columns is-multiline is-mobile">
          {product ? (
            <section className="column is-12">
              <ItemDetail product={product} />
            </section>
          ) : (
            <section className="column"> Publicacion no disponibles </section>
          )}
        </section>
      }
    </main>
  );
};
export default ItemDetailContainer;
