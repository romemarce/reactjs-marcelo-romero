import React from "react";
const TitleSection = ({title})=>{
  return (
    <section className="hero mt-5">
      <div className="hero-body">
        <p className="title">{title}</p>
      </div>
    </section>
  );
}
export default TitleSection