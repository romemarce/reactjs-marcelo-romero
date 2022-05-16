const Item = ({title, pictureUrl, price}) => {
  return <article className="card">
    <div className="card-image">
      <figure className="image is-4by3">
        <img src={pictureUrl} alt={title} />
      </figure>
    </div>
    <div className="card-content">
      <p className="product-title">{title}</p>
      <p className="product-price">${price}</p>
    </div>
  </article>
}
export default Item