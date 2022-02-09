//import logo from "./logo.svg";
import React, { useState } from "react";

import "../styles/App.css";
import Header from "./Header";
import Footer from "./Footer";
import GameIllustration from "./GameIllustration";
import GameInteractive from "./GameInteractive";

function App() {
  const [word, setWord] = useState([]);
  const [lastLetter, setlastLetter] = useState(""); // la última letra introducida por el user
  const [userLetters, setUserLetters] = useState([]); // todas las letras introducidas por el user

  const [wrongLetters, setWrongLetters] = useState([]);
  const [numberOfErrors, setNumberOfErrors] = useState(0);

  /*
 
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
  const animalsArray = [
    "dog",
    "cat",
    "tiger",
    "leopard",
    "lion",
    "penguin",
    "puffin",
    "bear",
    "cow",
    "eagle",
    "crocodile",
    "alligator",
    "ferret",
    "panda",
    "fox",
    "pig",
    "sheep",
    "donkey",
    "goat",
    "bat",
    "human",
    "rat",
    "horse",
    "wolf",
  ];

  //array de letras separadas
  let correctLetters = [];

  let noRepetedLetters = []; //letras no repetidas, número máximo de aciertos

  /*
  crear funcion que seleccione de manera aleatoria uno de los
  string de los animales y lo asigne la variable solucion
  */

  const getRandomNumber = () => {
    const maxNumber = animalsArray.length;
    const minNumber = 1;

    let randomWord = "";
    let randomWordLetters = [];

    let randomNumber = Math.floor(
      Math.random() * (maxNumber - minNumber) + minNumber + 1
    );

    //link random number to array and word
    randomWord = animalsArray[randomNumber];
    //split word into strings
    randomWordLetters = randomWord.split("");

    //update word state
    setWord(randomWordLetters);
  };

 

  const handleStartBtn = () => {
    getRandomNumber();
  };

  //const solution = "jartura";

  // step 2 calcular max numero de errores y aciertos para enviarlos al dibujo
  // (noRepetedLetters.length - numberOfErrors);

  // step 3
  // detecta si hay letras repetidas
  // separa la solución en cadenas de letras

  const correctLettersFiltered = () => {
    for (let i = 0; i < word.length; i++) {
      //si letrasRepetidas NO tiene la misma letra que correcLetters, añádelo al array noRepetedLetters
      if (!noRepetedLetters.includes(word[i])) {
        noRepetedLetters.push(word[i]);
      }
    }
    return noRepetedLetters;
  };

  correctLettersFiltered();

  //step 6
  //función para almacenar letras usadas por usuario + para validar que los caracteres son válidos
  const handleChange = (ev) => {
    const reg = /^[a-z]+$/i; //caracteres que pueden introducirse (alfabeto inglés, solo letras, mayus y minus)

    let inputValue = ev.target.value.toLowerCase();

    if (!inputValue) {
      //si hay espacio en blanco, añade una letra
      //window.alert("añade una letra")
    } else if (userLetters.includes(inputValue)) {
      //letra ya usada
      window.alert("ya has usado esa letra");
    } else if (
      // letra correcta
      !userLetters.includes(inputValue) &&
      inputValue.match(reg) &&
      correctLetters.includes(inputValue)
    ) {
      window.alert("la letra " + inputValue + "  está en la solución");
      setlastLetter(inputValue);
      setUserLetters([...userLetters, inputValue]);

      if (userLetters.includes(correctLetters)) {
        window.alert("has ganado");
      }
    } else if (
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
      window.alert("la letra " + inputValue + "  NO está en la solución");

      if (wrongLetters.length >= noRepetedLetters.length) {
        window.alert("has perdido");
        setlastLetter("");
        setUserLetters([]);
        setWrongLetters([]);
        setNumberOfErrors(0);
      }
    } else if (inputValue !== reg) {
      //caracter no válido
      // si es un caracter inválido
      window.alert("caracter no válido");
    }
  };

  return (
    <>
      <Header />
      <GameIllustration numberOfErrors={numberOfErrors} />
      <GameInteractive
        handleStartBtn={handleStartBtn}
        userLetters={userLetters}
        lastLetter={lastLetter}
        numberOfErrors={numberOfErrors}
        handleChange={handleChange}
        correctLetters={correctLetters}
        word={word}
      />
      <Footer />
    </>
  );
}

export default App;
