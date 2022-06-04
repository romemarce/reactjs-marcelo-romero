import React, { useEffect, useState } from "react"
import { collection, getDocs, getFirestore, deleteDoc, doc } from "firebase/firestore"
import Loading from "../pages/utils/Loading";
const ListCategories = () => {
  const [category, setCategory] = useState([])
  
  const [loading, setLoading] = useState(false);

  const getAllCategories = () => {
    setLoading(true)
    const db = getFirestore();

    const itemCollection = collection(db, "categories");

    getDocs(itemCollection).then(({ docs }) => {
      setCategory(docs.map(doc => ({ id: doc.id, ...doc.data() })))
      setLoading(false)
    }).catch(err => console.log(err))
  }

  useEffect(() => {
    getAllCategories()
  }, [])

  const removeElement = (id) => {
    const db = getFirestore();
    const item = doc(db, "categories", id)

    if (window.confirm("Delete item ?")) {
      setLoading(true)
      deleteDoc(item)
        .then(res => console.log("delete element", res))
        .catch(err => console.log(err))
        .finally(()=>setLoading(false))
    }
    getAllCategories()
  }

  return (
    <>
      <h1 className="title">List categories</h1>
      {loading && <Loading />}
      <ul>
        {category && category.map(({ title, slug, id }) => <li key={id}>
          {title} - {slug} - <button onClick={() => removeElement(id)}>Remove element</button>
        </li>)}
        {!loading && category.length === 0 && <li>No hay categorias</li>}
      </ul>
    </>
  )
}
export default ListCategories