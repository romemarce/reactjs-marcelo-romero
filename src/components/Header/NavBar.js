import Categories from "./Categories"
import Controls from "./Controls"

const NavBar = () => {
  const listCategories = [
    { name: "item 1" },
    { name: "item 2" },
    { name: "item 3" },
    { name: "item 4" },
  ]
  return (
    <nav className="navbar is-dark">
      <section className="navbar-brand">
        <h1 className="title p-3">ROMEROTech</h1>
      </section>
      <section className="navbar-menu">
        <Categories items={listCategories} />
        <Controls />
      </section>
    </nav>
  )
}
export default NavBar