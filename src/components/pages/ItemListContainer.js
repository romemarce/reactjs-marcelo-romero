import React from "react";
import { useEffect, useState } from "react";
import ErrorMessage from "./utils/ErrorMessage";
import ItemList from "./ItemList";
import Loading from "./utils/Loading";
import { useParams } from "react-router-dom";
import { collection, getDocs, getFirestore, query, where } from "firebase/firestore";
const ItemListContainer = () => {
  const Params = useParams()
  const categorySlug = Params.id || ""
  const [listado, setListado] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    setLoading(true);
    const db = getFirestore();
    let itemCollection;
    if (categorySlug !== "") {
      itemCollection = query(
        collection(db, "products"),
        where("category", "==",categorySlug)
      )
    } else {
      itemCollection = collection(db, "products");
    }

    getDocs(itemCollection)
      .then(({ docs }) => {
        setListado(docs.map(doc => ({ id: doc.id, ...doc.data() })))
      })
      .then(() => setLoading(false))
      .catch(err => {
        console.log(err)
        setError(err);
        setLoading(false);
      })
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
