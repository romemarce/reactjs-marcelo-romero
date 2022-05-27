import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "./ItemDetail";
import ErrorMessage from "./utils/ErrorMessage";
import Loading from "./utils/Loading";
import { doc, getDoc, getFirestore } from "firebase/firestore";

const ItemDetailContainer = () => {
  const { id } = useParams()
  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  useEffect(() => {
    const db = getFirestore();
    const item = doc(db, "products", id)
    getDoc(item)
      .then((snaptshot)=>{
        if(snaptshot.exists()){
          setProduct({id: snaptshot.id, ...snaptshot.data()})
        }
      })
      .then(() => setLoading(false))
      .catch(err => {
        console.log(err)
        setError(err);
        setLoading(false);
      })
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
