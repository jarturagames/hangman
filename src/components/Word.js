// step 4 - mapeo en y generador de <span></span>
import React from "react";

const Word = ({ correctLetters, userLetters }) => {
  return (
    <>
      <p>
        {
          /* si el array userLetters contiene correctLetters, pinta una raya */
          correctLetters.map((letter, i) => {
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

/*
<p>
        {correctLetters.map((letter, i) => {
          return (
            <span className="letter" key={i}>
              {letter}
            </span>
          );
        })}
      </p>
*/
