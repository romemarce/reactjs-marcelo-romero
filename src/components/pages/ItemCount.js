import React from "react";
const ItemCount = ({ onAdd, count}) => {

  return (
    <>
      <section className="input-numeric">
        <button aria-label="decrement" onClick={() => onAdd("decrement")}>
          -
        </button>
        <input className="input" disabled type="text" value={count} />
        <button aria-label="increment" onClick={() => onAdd("increment")}>
          +
        </button>
      </section>
      <style>{`
        .input-numeric {
          max-width: 300px;
          display: grid;
          grid-template-columns: 30px auto 30px;
        }
        .input-numeric button,
        .input-numeric input {
          height: 30px;
          text-align: center;
        }
        .input-numeric button {
          border: 0;
          border-radius: 0;
          cursor: pointer;
        }
        .input-numeric button:hover{
          background-color: black;
          color: white;
          font-weight: bold;
          transition: all ease .4s;
        }
      `}</style>
    </>
  );
};
export default ItemCount;
