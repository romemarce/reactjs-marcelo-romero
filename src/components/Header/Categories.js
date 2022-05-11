const Categories = ({ items }) => {

  return (
    <>
      {
        items && items.map((e, k) => {
          return (
            <a className="navbar-item" href="#" key={k}>
              {e.name}
            </a>
          )
        })
      }
    </>
  )
}
export default Categories
