import { useState } from "react";

const ItemCount = ({ stock }) => {
  const [count, setCount] = useState(0);
  const handleClick = (e) => {
    switch (e.target.getAttribute("aria-label")) {
      case "increment":
        if (count + 1 <= stock) setCount(count + 1);
        else alert("Stock no disponible");
        break;
      case "decrement":
        if (count - 1 >= 0) setCount(count - 1);
        break;
      default:
        break;
    }
    console.log();
  };

  return (
    <>
      <section className="input-numeric">
        <button aria-label="decrement" onClick={handleClick}>
          -
        </button>
        <input className="input" disabled type="text" value={count} />
        <button aria-label="increment" onClick={handleClick}>
          +
        </button>
      </section>
      <style>{`
        .input-numeric {
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
