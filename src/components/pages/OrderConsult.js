
import { useFormik } from "formik";
import React from "react";
import { useNavigate } from "react-router-dom";
import ErrorInput from "./utils/ErrorInput";

const OrderConsult = () => {
  const navigate = useNavigate()
  const validate = values => {
    const errors = {};
    if (!values.codigo) {
      errors.codigo = 'Falta completar el campo';
    } else if (values.codigo.length > 20) {
      errors.codigo = 'El codigo ingresado no es correcto';
    }
    return errors;
  };
  const formik = useFormik({
    initialValues: { codigo: "" }, validate, onSubmit: ({ codigo }) => {
      navigate(`/order/${codigo}`)
    }
  })
  return (
    <main className="container">
      <section className="columns is-multiline is-mobile is-justify-content-space-evenly">
        <div className="column is-5">
          <form onSubmit={formik.handleSubmit} className="mt-5 mb-5">
            <article className="card box">
              <h1 className="subtitle">Código del producto</h1><hr />
              <input
                name="codigo"
                onChange={formik.handleChange}
                value={formik.values.codigo}
                className="input mt-2"
                type="text"
                placeholder="Ingresar el código del pedido"
              />
              {formik.errors.codigo ? <ErrorInput title={formik.errors.codigo} /> : null}
              <button
                type="submit"
                className="mt-5 button is-info is-fullwidth"
              >
                CONSULTAR ORDEN DE COMPRA
              </button>
            </article>
          </form>
        </div>
      </section>

    </main>
  )
}
export default OrderConsult