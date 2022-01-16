import React from "react";
import getApiData from "../services/api";

const GameInteractive = () => {
  const handleButton = (ev) => {
    getApiData();
  };
  return (
    <main>
      <button onClick={handleButton} className="start__button">
        START
      </button>

      <section className="section_solution">
        <div>imagen</div>

        <div>
          <p>solucion</p>
        </div>
      </section>
      <section className="section_form_game">
        <form>
          <input placeholder="chosen word"></input>

          <button>submit</button>

          <input disabled="disabled" placeholder="number of errors"></input>
        </form>
      </section>
    </main>
  );
};

export default GameInteractive;
