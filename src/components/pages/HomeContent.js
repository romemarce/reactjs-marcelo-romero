import ItemListContainer from "./ItemListContainer";

const HomeContent = () => {
  return (
    <main className="container">
      <section className="columns is-multiline is-mobile">
        <div className="column is-12">
          <ItemListContainer greeting={"Home content"}/>
        </div>
      </section>
    </main>
  )
}
export default HomeContent;