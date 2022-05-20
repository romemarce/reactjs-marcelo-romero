import React from "react";
import { useEffect, useState } from "react";
import ErrorMessage from "./utils/ErrorMessage";
import ItemList from "./ItemList";
import Loading from "./utils/Loading";
import listProduct from "./../../assets/data/products.json";
import { useParams } from "react-router-dom";
const ItemListContainer = () => {
  const Params = useParams()
  const [listado, setListado] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    setLoading(true);
    const listar = new Promise((res, rej) => {
      setTimeout(() => {
        if (true) {
          if (Params.id) {
            const products = []
            listProduct.forEach(e => {
              if (parseInt(e.category) === parseInt(Params.id)) {
                products.push(e)
              }
            })
            res(products)
          } else {
            res(listProduct)
          }
        }
        else { rej("Error") };
      }, 2000);
    });

    listar
      .then((result) => {
        setListado(result);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setError(err);
        setLoading(false);
      });
  }, [Params.id]);

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
        <section className="columns is-multiline is-mobile is-justify-content-space-around	">
          {listado ? (
            <ItemList list={listado} />
          ) : (
            <section className="column"> Elementos no disponibles </section>
          )}
        </section>
      }
    </main>
  );
};
export default ItemListContainer;
