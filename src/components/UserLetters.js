import React from "react";

export const UserLetters = ({ userLetters }) => {
  return (
    <>
      <p>All letters used: {" "}
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
