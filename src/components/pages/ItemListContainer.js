import ItemCount from "./Product/ItemCount";

const ItemListContainer = ({list}) => {

  const listProduct = list.length > 0 && list.map((e, k) => (
    <div className="column is-6-mobile is-3-desktop mt-5 mb-5" key={k}>
      <div className="card">
        <div className="card-image">
          <figure className="image is-4by3">
            <img src="https://picsum.photos/300" alt={e.name} />
          </figure>
        </div>
        <div className="card-content">
          {e.name}
          <ItemCount stock={e.stock} />
          <button
            style={{ width: "100%" }}
            className="mt-3 button is-dark is-outlined"
          >
            Agregar al carrito
          </button>
        </div>
      </div>
    </div>
  ));

  return (
    <>
      <section className="conatiner is-fluid">
        <div className="columns is-multiline is-mobile">{listProduct}</div>
      </section>
    </>
  );
};
export default ItemListContainer;
