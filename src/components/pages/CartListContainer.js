import React from "react";

const CartListContainer = () => {
  return (
    <main className="contaier">
      <section className="columns is-multiline is-mobile">
        <section className="column is-12">
          <h1 className="title m-5">En construcción</h1>

          <table className="table" style={{ width: "100%", maxWidth: "80%", margin: "10px auto" }}>
            <thead>
              <tr>
                <th>Id</th>
                <th>Imagen</th>
                <th>Producto</th>
                <th>Precio</th>
                <th>Cantidad</th>
                <th>SubTotal</th>
              </tr>
            </thead>
            <tfoot>
              <tr>
                <th colSpan={5}>
                  Cupon de descuento:
                  <input style={{ maxWidth: "400px", display: "block" }} className="input" type="text" placeholder="Código de descuento..." />
                </th>
                <th>Total: $500
                <button className="button mt-3 is-dark" style={{display:"block"}}>Finalizar compra</button>
                </th>
              </tr>
            </tfoot>
            <tbody>
              <tr>
                <th>1</th>
                <th>Imagen</th>
                <th>Nombre producto</th>
                <th>$500</th>
                <th>1</th>
                <th>$500</th>
              </tr>
            </tbody>
          </table>
        </section>
      </section>
    </main>
  );
};
export default CartListContainer;
