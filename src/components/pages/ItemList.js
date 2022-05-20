import React from "react"
import Item from "./Item"
const ItemList = ({ list }) => {
  return (
    <>
      {list && list.map(({ id, title, pictureUrl, price }) => {
        return <section className="column is-6-mobile is-3-desktop mt-5 mb-5" key={id}>
          <Item pictureUrl={pictureUrl} price={price} title={title} id={id} />
        </section>
      })}
    </>
  )
}
export default ItemList