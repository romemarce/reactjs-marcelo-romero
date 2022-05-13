const Categories = ({ items }) => {

  return (
    <section className="navbar-end">
      {
        items && items.map((e, k) => {
          return (
            <a href="/" className="navbar-item" key={k}>
              {e.name}
            </a>
          )
        })
      }
    </section>
  )
}
export default Categories
