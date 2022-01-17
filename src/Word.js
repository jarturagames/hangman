  // step 3 - mapeo en y generador de <span></span>

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
