import React from "react";
import Word from "./Word";

//import getApiData from "../services/api";
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

*/

  return (
    <main>
      <section className="section_solution">
        <div>Guess an animal</div>
        <div>
          <Word
            word={word}
            correctLetters={correctLetters}
            userLetters={userLetters}
          />
          <p>Last letter used: {lastLetter}</p>
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
            value={`Mistakes: ${numberOfErrors}`}
            disabled="disabled"
            placeholder={numberOfErrors}
          ></input>
        </form>
      </section>
    </main>
  );
};

export default GameInteractive;
