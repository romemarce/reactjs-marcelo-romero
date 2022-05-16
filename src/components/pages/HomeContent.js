import ItemListContainer from "./ItemListContainer";
import TitleSection from "./TitleSection";


const HomeContent = () => {
  return (
    <main className="container">
      <TitleSection title="Tienda" />
      <ItemListContainer />
    </main>
  );
}
export default HomeContent;