import React, { useEffect, useState } from "react"
import { collection, getDocs, getFirestore, deleteDoc, doc, updateDoc } from "firebase/firestore"
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
        .finally(() => setLoading(false))
    }
    getAllProducts()
  }

  const addStock = (id) => {
    const db = getFirestore();
    const item = doc(db, "products", id)
    setLoading(true)
    updateDoc(item, { stock: 10})
    .then(res=>{
      console.log("Stock actualizado")
    })
    .catch(err=> console.log(err))
    .finally(setLoading(false))
    getAllProducts()
  }

  return (
    <>
      <h1 className="title">List product</h1>
      {loading ? <Loading /> :
        <table className="table is-fullwidth">
          <thead>
            <tr>
              <th>Title</th>
              <th>Price</th>
              <th>Stock</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {products && products.map(
              ({ id, title, price, stock }) =>
                <tr key={id}>
                  <td>{title}</td>
                  <td>{price}</td>
                  <td>{stock}</td>
                  <td><button onClick={() => removeElement(id)}>Remove element</button> <button onClick={() => addStock(id)}>Setear 10 de stock</button></td>
                </tr>
            )}
            {
              !loading &&
              products.length === 0 &&
              <tr className="has-text-centered">
                <td colSpan={4}>No hay productos</td>
              </tr>
            }
          </tbody>
        </table>
      }
    </>
  )
}
export default ListProduct