//import logo from "./logo.svg";
import React, { useState } from "react";

import "../styles/App.css";
import Header from "./Header";
import Footer from "./Footer";
import GameIllustration from "./GameIllustration";
import GameInteractive from "./GameInteractive";

function App() {
  const [lastLetter, setlastLetter] = useState(""); // la última letra introducida por el user
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
  let triesLeft = maxNumberOfErrors - userLetters.length;

  // step 3
  // separa la solución en letras
  const correctLetters = solution.split("");

  //step 6
  const handleErrors = (ev) => {
    //comprueba si la letra que introduce el usuario está dentro de las letras de la solución

    if (!correctLetters.includes(lastLetter)) {
      console.log("la letra " + lastLetter + " no está en la solución");
      setWrongLetters([...wrongLetters, ev.target.value]);
      setNumberOfErrors(...(numberOfErrors + 1));
      console.log("prueba otra vez");
    }
  };

  //step 7
  //función para almacenar letras usadas por usuario + para validar que los caracteres son válidos
  const handleChange = (ev) => {
    const reg = /^[a-z]+$/i; //caracteres que pueden introducirse (alfabeto inglés, solo letras, mayus y minus)

    let inputValue = ev.target.value.toLowerCase();

    if (!inputValue) {
      //si hay espacio en blanco, añade una letra
      console.log("añade una letra");
    } 
    else if (userLetters.includes(inputValue)) {
     //letra ya usada
    console.log("ya has usado esa letra");
    } 
    else if (
    !userLetters.includes(inputValue) &&
    inputValue.match(reg) &&
    correctLetters.includes(inputValue)
    ) {
      // letra correcta
      console.log("la letra " + inputValue + "  está en la solución");
      setlastLetter(inputValue);
      setUserLetters([...userLetters, inputValue]);
      console.log("bravo, caracter válido y letra correcta");
    } 
    else if (
    !userLetters.includes(inputValue) &&
    inputValue.match(reg) &&
    !correctLetters.includes(inputValue)
    ) {
      // letra incorrecta
      //si es un caracter válido, actualiza estados
      setWrongLetters([...wrongLetters, ev.target.value]);
      setNumberOfErrors(numberOfErrors + 1);

      setlastLetter(inputValue);
      setUserLetters([...userLetters, inputValue]);
      console.log("la letra " + inputValue + "  NO está en la solución");
    } 
    else if (inputValue !== reg) {
      //caracter no válido
      // si es un caracter inválido
      console.log("caracter no válido");
    }
  };
  console.log("letras falladas " + wrongLetters);
  console.log("letras user " + userLetters);

  return (
    <>
      <Header />
      <GameIllustration />
      <GameInteractive
        userLetters={userLetters}
        lastLetter={lastLetter}
        numberOfErrors={numberOfErrors}
        handleChange={handleChange}
        correctLetters={correctLetters}
        solution={solution}
        triesLeft={triesLeft}
      />
      <Footer />
    </>
  );
}

export default App;
