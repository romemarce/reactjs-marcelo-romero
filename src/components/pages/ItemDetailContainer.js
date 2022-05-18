import { useEffect, useState } from "react";
import ItemDetail from "./ItemDetail";
import ErrorMessage from "./utils/ErrorMessage";
import Loading from "./utils/Loading";

const ItemDetailContainer = () => {
  const resProduct = {
    id: 3,
    title: "Producto 4",
    price: 500,
    pictureUrl: "https://picsum.photos/800",
    description: "This is a large description",
    stock: 10,
  };
  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const getItem = () =>
    new Promise((res, rej) => {
      setTimeout(() => {
        if (true) res(resProduct);
        else rej("Error");
      }, 2000);
    });

  useEffect(() => {
    setLoading(true);
    getItem()
      .then((result) => {
        setProduct(result);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setError(err);
        setLoading(false);
      });
  }, []);
  if (error) {
    return (
      <ErrorMessage
        title={"Error"}
        message={"Error al cargar el listado de productos"}
      />
    );
  }
  return (
    <>
      {loading && <Loading />}
      <section className="columns is-multiline is-mobile">
        {product ? (
          <section className="column is-12">
            <ItemDetail product={product} />
          </section>
        ) : (
          <section className="column"> Publicacion no disponibles </section>
        )}
      </section>
    </>
  );
};
export default ItemDetailContainer;
