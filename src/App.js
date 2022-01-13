//import logo from "./logo.svg";
import React, { useState } from "react";

import "./App.css";

function App() {
  const handleSubmit = (ev) => {
    ev.preventDefault();
  };

  /*
  letter detector
    1. we have a solution designated
    (2. what are the letters in that solution?
     - split the word into letters)

    3.the user adds a letter - does the solution word contain that letter?
      -yes: show that letter on the screen
      -no: paint the next part of the hangman
      
*/

  const [inputValue, setInputValue] = useState("");

  const solution = "jartura";

  // separa la solución en letras
  const correctLetters = solution.split("");
  //console.log(solutionLetters);

  let userInput = "i";

  const letterDetector = () => {
    //comprueba si la letra que introduce el usuario está dentro de las letras de la solución

    if (correctLetters.includes(userInput)) {
      console.log("la letra " + userInput + " está en la solución");
    } else {
      console.log("prueba otra vez");
    }
  };

  // rayitasGenerator
  // cuando tenemos una solution, genera las rayitas para cada letra correcta

  //letterDetector();

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
            <p>solucion</p>
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
