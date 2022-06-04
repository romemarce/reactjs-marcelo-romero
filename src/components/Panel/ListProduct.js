import React, { useEffect, useState } from "react"
import { collection, getDocs, getFirestore, deleteDoc, doc } from "firebase/firestore"
import Loading from "../pages/utils/Loading";
const ListProduct = () => {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(false);

  const getAllProducts = () => {
    setLoading(true)
    const db = getFirestore();

    const itemCollection = collection(db, "products");

    getDocs(itemCollection).then(({ docs }) => {
      setProducts(docs.map(doc => ({ id: doc.id, ...doc.data() })))
    })
    .catch(err => console.log(err))
    .finally(() => setLoading(false))
  }

  useEffect(() => {
    getAllProducts()
  }, [])

  const removeElement = (id) => {
    const db = getFirestore();
    const item = doc(db, "products", id)

    if (window.confirm("Delete item ?")) {
      setLoading(true)
      deleteDoc(item)
        .then(res => {
          console.log("delete element", res)
        })
        .catch(err => console.log(err))
        .finally(()=>setLoading(false))
    }
    getAllProducts()
  }

  return (
    <>
      <h1 className="title">List product</h1>
      {loading && <Loading />}

      <ul>
        {products && products.map(({ id, title, price, stock }) => <li key={id}>
          {title} - ${price} - {stock} unidades - <button onClick={() => removeElement(id)}>Remove element</button>
        </li>)}

        {!loading && products.length === 0 && <li>No hay productos</li>}
      </ul>

    </>
  )
}
export default ListProduct