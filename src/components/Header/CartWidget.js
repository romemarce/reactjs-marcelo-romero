import cartIcon from "./../../assets/img/cart-icon.png";
const CartWidget = ({ count }) => {
  count = count>9 ? "9+" : count
  return (
    <section className="cart-widget">
      <img src={cartIcon} alt="carrito" />
      <span>{count}</span>
    </section>

  )
}
export default CartWidget