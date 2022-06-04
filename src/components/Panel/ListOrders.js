
import React, { useEffect, useState } from "react"
import { collection, getDocs, getFirestore, deleteDoc, doc } from "firebase/firestore"
import Loading from "../pages/utils/Loading"
const ListOreders = () => {
  const [orders, setOrder] = useState([])
  const [loading, setLoading] = useState(false)
  

  const getAll = () => {
    setLoading(true)
    const db = getFirestore();

    const itemCollection = collection(db, "orders");
    getDocs(itemCollection).then(({ docs }) => {
      setOrder(docs.map(doc => ({ id: doc.id, ...doc.data() })))
    })
    .catch(err => console.log(err))
    .finally(()=> setLoading(false))
  }

  useEffect(() => {
    getAll()
  }, [])

  const removeElement = (id) => {
    const db = getFirestore();
    const item = doc(db, "orders", id)

    if (window.confirm("Delete item ?")) {
      setLoading(true)
      deleteDoc(item)
        .then(res => console.log("delete element", res))
        .catch(err => console.log(err))
        .finally(()=>setLoading(false))
    }
    getAll()
  }

  return (
    <>
      <h1 className="title">List orders</h1>
      <ul>
        {loading && <Loading />}
        {orders && orders.map(({id})=><li key={id}>{id} - <button onClick={() => removeElement(id)}>Remove element</button></li>)}
        {!loading &&  orders.length === 0 && <li>No hay ordenes</li>}
      </ul>

    </>
  )
}
export default ListOreders