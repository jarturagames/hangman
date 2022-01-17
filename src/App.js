//import logo from "./logo.svg";
import React, { useState } from "react";

import "./App.css";
import Word from "./Word";

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

    6. user interaction: 
      once the user adds a letter, store this new letter
      
*/

  const [lastLetter, setlastLetter] = useState(); // la última letra introducida por el user
  const [userLetters, setUserLetters] = useState([]); // todas las letras introducidas por el user

  // step 1
  const solution = "pepa";

  // step 2
  // separa la solución en letras
  const correctLetters = solution.split("");

  const handleChange = (ev) => {
    setlastLetter(ev.target.value); //cambia el estado de lastLetter a la nueva letra

    setUserLetters([...userLetters, ev.target.value]); // guarda todas las letras que el usuario ha usado
  };

  const letterDetector = (ev) => {
    //comprueba si la letra que introduce el usuario está dentro de las letras de la solución

    if (correctLetters.includes(lastLetter)) {
      console.log("la letra " + lastLetter + " está en la solución");
    } else {
      console.log("prueba otra vez");
    }
  };

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
            <Word correctLetters={correctLetters} solution={solution} />

            <p>Última letra: {lastLetter}</p>
            <p>Letras usadas: {userLetters}</p>
          </div>
        </section>
        <section className="section_form_game">
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              maxLength={1}
              name="userInput"
              placeholder="type a letter"
              onChange={handleChange}
              value={lastLetter}
            ></input>

            <button onClick={letterDetector}>submit</button>

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
