import React from "react";
import Word from "./Word";

import getApiData from "../services/api";

const GameInteractive = ({
  correctLetters,
  solution,
  handleChange,
  lastLetter,
  userLetters,
  numberOfErrors,
  triesLeft
}) => {
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
          <Word correctLetters={correctLetters} solution={solution} />
          <p>Última letra: {lastLetter}</p>
          <p>Letras usadas: {userLetters}</p>{" "}
          <p>Te quedan {triesLeft} intentos</p>
        </div>
      </section>
      <section className="section_form_game">
        <form >
          <input
            type="text"
            maxLength={1}
            name="userInput"
            placeholder="type a letter"
            onChange={handleChange}
           
          ></input>
          <input value={numberOfErrors} disabled="disabled" placeholder="number of errors"></input>
        </form>
      </section>
    </main>
  );
};

export default GameInteractive;
