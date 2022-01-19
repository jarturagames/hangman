//import logo from "./logo.svg";
import React, { useState } from "react";

import "../styles/App.css";
import Header from "./Header";
import Footer from "./Footer";
import GameIllustration from "./GameIllustration";
import GameInteractive from "./GameInteractive";

function App() {
  const [lastLetter, setlastLetter] = useState(); // la última letra introducida por el user
  const [userLetters, setUserLetters] = useState([]); // todas las letras introducidas por el user

  const [wrongLetters, setWrongLetters] = useState([]);
  const [numberOfErrors, setNumberOfErrors] = useState(0);

  /*
  letter detector
    1. we have a solution designated - string

    2. we have a max number of errors - number (whole hangman)

    3. what are the letters in that solution?
     - split the word into letters

    4. for each letter, generate a _ for the user to see

    5. according to the number of letters, split the hangman parts into the whole solution

    6. user interaction:
      the user adds a letter 
      - listen to the event
      - store the new letter as "lastLetter" + store the new letter in "userLetters"
      
    7. does the solution word contain that new user letter?
      -yes: show that letter on the screen
      -no: store it inside "wrongLetters" + show the counter of errors on the screen +1 error

*/

  // step 1
  const solution = "jartura";

  //step 2
  const maxNumberOfErrors = solution.length;

  // step 3
  // separa la solución en letras
  const correctLetters = solution.split("");

  //step 6
  const handleNewLetter = (ev) => {
    //comprueba si la letra que introduce el usuario está dentro de las letras de la solución

    if (correctLetters.includes(lastLetter)) {
      console.log("la letra " + lastLetter + " está en la solución");
    } else {
      setWrongLetters([...wrongLetters, ev.target.value]);
      setNumberOfErrors(numberOfErrors + 1);
      console.log("prueba otra vez");
    }
  };
  //step 7
  //función para almacenar letras usadas por usuario + para validar que los caracteres son válidos
  const handleChange = (ev) => {
    const reg = /^[a-z]+$/i; //caracteres que pueden introducirse (alfabeto inglés, solo letras, mayus y minus)

    if (!ev.target.value) {
      console.log("añade una letra");
    } 
    else if (ev.target.value.match(reg)) {
      setlastLetter(ev.target.value);
      setUserLetters([...userLetters, ev.target.value]);
      console.log("bravo, caracter válido");
    } 
    else if (ev.target.value !== reg){
      console.log("caracter no válido");      
    }
    /*
    setlastLetter(ev.target.value); //cambia el estado de lastLetter a la nueva letra

    setUserLetters([...userLetters, ev.target.value]); // guarda todas las letras que el usuario ha usado
    */
  };

  return (
    <>
      <Header />
      <GameIllustration />
      <GameInteractive
        userLetters={userLetters}
        lastLetter={lastLetter}
        numberOfErrors={numberOfErrors}
        handleChange={handleChange}
        handleNewLetter={handleNewLetter}
        correctLetters={correctLetters}
        solution={solution}
      />
      <Footer />
    </>
  );
}

export default App;
