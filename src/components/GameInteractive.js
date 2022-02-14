import React from "react";
import Word from "./Word";

import getApiData from "../services/api";
import { UserLetters } from "./UserLetters";

const GameInteractive = ({
  correctLetters,
  word,
  handleChange,
  lastLetter,
  userLetters,
  numberOfErrors,
}) => {
  /*
  const handleButton = (ev) => {
    getApiData();
  };
  style={{visibility:'hidden'}} 

  si showForm es true, pon visibility show,
  si showForm es false, pon visibility hidden

  showForm ? style={{visibility:'hidden'}} : style={{visibility:'visible'}}  
*/

  return (
    <main>
      <section className="section_solution">
        <div>imagen</div>
        <div>
          <Word
            word={word}
            correctLetters={correctLetters}
            userLetters={userLetters}
          />
          <p>Última letra: {lastLetter}</p>
          <UserLetters userLetters={userLetters} />
        </div>
      </section>
      <section className="section_form_game">
        <form>
          <input
            autoComplete="off"
            type="text"
            maxLength={1}
            name="userInput"
            placeholder="type a letter"
            onChange={handleChange}
          ></input>
          <input
            value={`Errores: ${numberOfErrors}`}
            disabled="disabled"
            placeholder={numberOfErrors}
          ></input>
        </form>
      </section>
    </main>
  );
};

export default GameInteractive;
