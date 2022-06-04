
import React, { useEffect, useState } from "react"
import { collection, addDoc, getFirestore, getDocs } from "firebase/firestore"

const initialState = { pictureUrl: "http://placeimg.com/800/600/tech" }

const AddProduct = () => {
  const [product, setProduct] = useState(initialState)
  const [categories, setCategories] = useState([])

  const getAllCategories = () => {
    const db = getFirestore();

    const itemCollection = collection(db, "categories");

    getDocs(itemCollection).then(({ docs }) => {
      setCategories(docs.map(doc => ({ id: doc.id, ...doc.data() })))
    }).catch(err => console.log(err))
  }

  useEffect(() => {
    getAllCategories()
  }, [])

  const handleChange = (e) => {
    switch (e.target.name) {
      case "price": setProduct({ ...product, price: parseFloat(e.target.value) }); break;
      case "stock": setProduct({ ...product, stock: parseInt(e.target.value) }); break;
      default: setProduct({ ...product, [e.target.name]: e.target.value }); break;
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const db = getFirestore();
    const productCollection = collection(db, "products");
    // console.log(product)
    addDoc(productCollection, product)
      .then(({ id }) => alert(`Post creado ${id}`))
      .then(() => {
        e.target.reset()
        setProduct(initialState)
      })
      .catch(err => console.log(err))
  }
  return (
    <>
      <form className="form" onSubmit={handleSubmit}>
        <h1 className="title">Add product</h1>
        <input onChange={handleChange} name="title" className="input" type="text" placeholder="Title product" />
        <input onChange={handleChange} name="description" className="input mt-3" type="text" placeholder="description product" />
        <input onChange={handleChange} name="pictureUrl" className="input mt-3" type="text" placeholder="picture url product" value={product.pictureUrl || ''} />
        <input onChange={handleChange} name="price" className="input mt-3" type="number" placeholder="price" />
        <input onChange={handleChange} name="stock" className="input mt-3" type="number" placeholder="stock" />
        <div className="select is-fullwidth mt-3">
          <select onChange={handleChange} name="category">
            <option value={product.category || ""}>Seleccionar categoria</option>
            {categories && categories.map(({ id, slug, title }) => <option key={id} value={slug}>{title}</option>)}
          </select>
        </div>
        <button className="button is-dark mt-3">Submit</button>
      </form>
    </>
  )
}
export default AddProduct