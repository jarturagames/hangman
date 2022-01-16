import React from "react";

const GameInteractive = () => {
  return (
    <main>
      <button className="start__button">START</button>

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
