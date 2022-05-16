import { useEffect, useState } from "react";
import ErrorMessage from "./utils/ErrorMessage";
import ItemList from "./ItemList";
import Loading from "./utils/Loading";
const listProduct = [
  {
    "id": 0,
    "title": "Producto 1",
    "price": 500,
    "pictureUrl": "https://picsum.photos/300"
  },
  {
    "id": 1,
    "title": "Producto 2",
    "price": 500,
    "pictureUrl": "https://picsum.photos/300"
  },
  {
    "id": 2,
    "title": "Producto 3",
    "price": 500,
    "pictureUrl": "https://picsum.photos/300"
  },
  {
    "id": 3,
    "title": "Producto 4",
    "price": 500,
    "pictureUrl": "https://picsum.photos/300"
  }
]
const ItemListContainer = () => {

  const [listado, setListado] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")

  useEffect(() => {
    setLoading(true)
    const listar = new Promise((res, rej) => {
      setTimeout(() => {
        if (true) res(listProduct)
        else rej("Error")
      }, 2000)
    });

    listar
      .then((result) => {
        setListado(result)
        setLoading(false)
      })
      .catch((err) => {
        console.log(err)
        setError(err)
        setLoading(false)
      })
  }, [])

  if (error) {
    return <ErrorMessage title={"Error"} message={"Error al cargar el listado de productos"} />
  }

  return (
    <>
      {loading && <Loading />}
      <section className="columns is-multiline is-mobile is-justify-content-space-around	">
        {listado ? <ItemList list={listado} /> : <section className="column"> Elementos no disponibles </section>}
      </section>
    </>
  )
};
export default ItemListContainer;
