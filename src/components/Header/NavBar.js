import Categories from "./Categories"

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
        <div className="navbar-end">
          <Categories items={listCategories} />

        </div>
        <div className="navbar-end">
          <a className="navbar-item" href="#">
            Carrito / Cuenta / otros
          </a>
        </div>
      </section>
    </nav>
  )
}
export default NavBar