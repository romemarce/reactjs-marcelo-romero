import ItemCount from "./ItemCount";

const ItemDetail = ({ product }) => {
  const { id, title, price, pictureUrl, description, stock } = product;
  return (
    <>
      <article className="product-single">
        <img src={pictureUrl} className="product-single-img" alt={title} />
        <div className="product-content">
          <h2 className="title">{title}</h2>
          <p className="subtitle">{description}</p>
          <p className="product-single-price">${price}</p>
          <ItemCount stock={stock} />
        </div>
      </article>
    </>
  );
};
export default ItemDetail;
