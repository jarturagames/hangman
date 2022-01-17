//import logo from "./logo.svg";
import React, { useState } from "react";

import "./App.css";

function App() {
  const handleSubmit = (ev) => {
    ev.preventDefault();
  };

  /*
  letter detector
    1. we have a solution designated - string

    2. what are the letters in that solution?
     - split the word into letters

    3. for each letter, generate a _ for the user to see

    4. according to the number of letters, split the hangman parts into the whole solution

    5. user interaction:
      the user adds a letter - does the solution word contain that letter?
      -yes: show that letter on the screen
      -no: paint the next part of the hangman
      
*/

  const [inputValue, setInputValue] = useState("");

  // step 1
  const solution = "jartura";

  // step 2
  // separa la solución en letras
  const correctLetters = solution.split("");
  //console.log(solutionLetters);

  // step 3
  // rayitasGenerator
  // cuando tenemos una solution, genera las rayitas para cada letra correcta

  correctLetters.map((letter, i) => {
    return (
      <span className="letter" key={i}>
        {letter}
      </span>
    );
  });

  let userInput = "u";

  const letterDetector = () => {
    //comprueba si la letra que introduce el usuario está dentro de las letras de la solución

    if (correctLetters.includes(userInput)) {
      console.log("la letra " + userInput + " está en la solución");
    } else {
      console.log("prueba otra vez");
    }
  };

  letterDetector();
  console.log(correctLetters);

  return (
    <div className="App">
      <header>
        <h1>jartura games</h1>
      </header>

      <main>
        <section className="section_solution">
          <div>
            imagen
            <img></img>
          </div>

          <div>
            <p>
              {correctLetters.map((letter, i) => {
                return (
                  <span className="letter " key={i}>
                    {letter}
                  </span>
                );
              })}
            </p>
          </div>
        </section>
        <section className="section_form_game">
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="userInput"
              placeholder="chosen word"
            ></input>

            <button onClick={setInputValue}>submit</button>

            <input disabled="disabled" placeholder="number of errors"></input>
          </form>
        </section>
      </main>

      <footer>
        <span>&copy; jartura games</span>
        <span>
          logo
          <img alt="logo"></img>
        </span>
      </footer>
    </div>
  );
}

export default App;
