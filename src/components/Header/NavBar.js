import CartWidget from "./CartWidget"
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
        <Categories items={listCategories} />
        <section className="navbar-end">
          <a className="navbar-item">
            <CartWidget count={4} />
          </a>
          <a className="navbar-item">
            Cuenta
          </a>
        </section>
      </section>
    </nav>
  )
}
export default NavBar