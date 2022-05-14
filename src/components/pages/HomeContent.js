import ItemListContainer from "./ItemListContainer";
import TitleSection from "./utils/TitleSection";

const HomeContent = () => {
    const aux = [
      { name: "Producto 1", stock: 10 },
      { name: "Producto 2", stock: 10 },
      { name: "Producto 3", stock: 10 },
      { name: "Producto 3", stock: 10 },
    ];
  return (
    <main className="container">
      <section className="columns is-multiline is-mobile is-justify-content-space-around	">
        <div className="column is-12">
          <TitleSection title="Tienda" />
        </div>
        <ItemListContainer list={aux} />
      </section>
    </main>
  );
}
export default HomeContent;