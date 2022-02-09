// step 4 - mapeo en y generador de <span></span>
import React from "react";

const Word = ({ userLetters, word }) => {
  return (
    <>
      <p>
        {
          /* si el array userLetters contiene la letra que se está pintando con el map, pinta una raya */
          word.map((letter, i) => {
            if (userLetters.includes(letter)) {
              return (
                <span className="letter" key={i}>
                  {letter}
                </span>
              );
            } 
            else {
              return (
                <span className="letter" key={i}>
                  _
                </span>
              );
            }
          })
        }
      </p>
    </>
  );
};

export default Word;