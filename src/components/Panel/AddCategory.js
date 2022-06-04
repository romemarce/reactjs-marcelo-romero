
import React, { useState } from "react"
import { collection, addDoc, getFirestore } from "firebase/firestore"

const AddCategory = () => {
  const [category, setCategory] = useState({})
  const handleChange = (e) => {
    if (e.target.name === "title") {
      const slug = String(e.target.value).trim().replaceAll(" ","-")
      setCategory({...category, title: e.target.value, slug})
    }else{
      setCategory({ ...category, [e.target.name]: e.target.value })
    }
  }
  const handleSubmit = async (e) => {
    e.preventDefault()
    
    const db = getFirestore();
    const categoryCollection = collection(db, "categories");
    addDoc(categoryCollection, category)
      .then(({ id }) => alert(`Category creado ${id}`))
      .then(()=>{
        e.target.reset()
        setCategory({})
      })
      .catch(err => console.log(err))
  }
  return (
    <>
      <form className="form" onSubmit={handleSubmit}>
        <h1 className="title">Add category</h1>
        <input onChange={handleChange} name="title" className="input" type="text" placeholder="Title category" />
        <input onChange={handleChange} name="slug" className="input mt-3" type="text" placeholder="Slug category" value={category.slug || ''} />
        <button className="button is-dark mt-3">Submit</button>
      </form>
    </>
  )
}
export default AddCategory