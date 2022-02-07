import React from "react";

export const UserLetters = ({ userLetters }) => {
  return (
    <>
      <p>Letras usadas: {" "}
        {userLetters.map((letter, i) => {
          return (
            <span className="user-letter" key={i}>
              {letter}
            </span>
          );
        })}
      </p>
    </>
  );
};
