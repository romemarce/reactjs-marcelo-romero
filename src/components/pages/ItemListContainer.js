import React from "react";
import { useEffect, useState } from "react";
import ErrorMessage from "./utils/ErrorMessage";
import ItemList from "./ItemList";
import Loading from "./utils/Loading";
import { useParams } from "react-router-dom";
import { collection, getDocs, getFirestore, query, where } from "firebase/firestore";


import Slider1 from "./../../assets/img/slider/slider-1.png";
import Slider2 from "./../../assets/img/slider/slider-2.png";

import Slider from "react-slick";

const ItemListContainer = () => {
  const Params = useParams()
  const categorySlug = Params.id || ""
  const [listado, setListado] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const configSlider = {
    dots: false,
    infinite: true,
    arrows: false,
    fade: true,
    autoplay: true,
    autoplaySpeed: 3000,
    cssEase: "linear",
  };

  useEffect(() => {
    setLoading(true);
    const db = getFirestore();
    let itemCollection;
    if (categorySlug !== "") {
      itemCollection = query(
        collection(db, "products"),
        where("category", "==", categorySlug)
      )
    } else {
      itemCollection = collection(db, "products");
    }

    getDocs(itemCollection)
      .then(({ docs }) => {
        setListado(docs.map(doc => ({ id: doc.id, ...doc.data() })))
      })
      .then(() => setLoading(false))
      .catch(err => {
        console.log(err)
        setError(err);
        setLoading(false);
      })
  }, [Params.id]);

  if (error) {
    return (
      <ErrorMessage
        title={"Error"}
        message={"Error al cargar el listado de productos"}
      />
    );
  }

  return (
    <main className="container">
      {loading ? <Loading /> :
        <section className="columns is-multiline is-mobile is-justify-content-space-around	">
          <section className="column is-12 mt-3">
            <Slider {...configSlider}>
              <img src={Slider1} />
              <img src={Slider2} />
            </Slider>
          </section>

          {listado ? (
            <ItemList list={listado} />
          ) : (
            <section className="column"> Elementos no disponibles </section>
          )}
        </section>
      }
    </main>
  );
};
export default ItemListContainer;
