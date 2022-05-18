import ItemDetailContainer from "./ItemDetailContainer";
// import ItemListContainer from "./ItemListContainer";
import TitleSection from "./TitleSection";


const HomeContent = () => {
  return (
    <main className="container">
      {/* <TitleSection title="Tienda" /> */}
      {/* <ItemListContainer /> */}
      <TitleSection title="Producto" />
      <ItemDetailContainer />
    </main>
  );
}
export default HomeContent;