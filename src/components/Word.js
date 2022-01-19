  // step 4 - mapeo en y generador de <span></span>
  import React from "react";

const Word = ({ correctLetters, solution }) => {
  return (
    <>
      <p>
        {correctLetters.map((letter, i) => {
          return (
            <span className="letter" key={i}>
              {letter}
            </span>
          );
        })}
      </p>
    </>
  );
};

export default Word;
