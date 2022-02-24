//import logo from "./logo.svg";
import React, { useState } from "react";

import "../styles/App.css";
import Header from "./Header";
import Footer from "./Footer";
import GameIllustration from "./GameIllustration";
import GameInteractive from "./GameInteractive";
import getApiData from "../services/api";

function App() {
  const [word, setWord] = useState([]);

  const [showForm, setShowForm] = useState(false);
  const [lastLetter, setlastLetter] = useState(""); // la última letra introducida por el user
  const [userLetters, setUserLetters] = useState([]); // todas las letras introducidas por el user

  const [wrongLetters, setWrongLetters] = useState([]);
  const [numberOfErrors, setNumberOfErrors] = useState(0);

  /*
    1. press start button
      - game picks a random word, the solution

    2. for each letter, generate a _ for the user to see

    2. we have a max number of errors - number (whole hangman, svg)

    5. the user adds a letter 
      - listen to the event
      - store the new letter as "lastLetter" + store the new letter in "userLetters"
      
    5. does the solution word contain that new user letter?
      -yes: show that letter on the screen, store in lastletter and userletters
          are all the letters solved? 
            - y: the user has won
      -no: store it inside "wrongLetters" + increase the counter of errors + paint the hangman
          are the  wrongletters > than 4 (according to svg length)?
            -n : the user has lost
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

  const handleShowForm = () => {
    if (showForm === false) {
      setShowForm(true);
      console.log(showForm);
    } else {
      setShowForm(false);
      console.log(showForm);
    }
  };

  const handleStartBtn = () => {
    getRandomNumber();
    handleShowForm();
  };

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
      word.includes(inputValue)
    ) {
      window.alert("la letra " + inputValue + "  está en la solución");
      setlastLetter(inputValue);
      setUserLetters([...userLetters, inputValue]);

      if (userLetters.includes(word)) {
        window.alert("has ganado");
      }
    } else if (
      !userLetters.includes(inputValue) &&
      inputValue.match(reg) &&
      !word.includes(inputValue)
    ) {
      // letra incorrecta
      //si es un caracter válido, actualiza estados
      setWrongLetters([...wrongLetters, ev.target.value]);
      setNumberOfErrors(numberOfErrors + 1);

      setlastLetter(inputValue);
      setUserLetters([...userLetters, inputValue]);
      window.alert("la letra " + inputValue + "  NO está en la solución");

      if (wrongLetters.length > 4) {
        window.alert(`has perdido`);
        setlastLetter("");
        setUserLetters([]);
        setWrongLetters([]);
        setNumberOfErrors(0);
        getRandomNumber();
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
      {showForm ? (
        <GameInteractive
          handleStartBtn={handleStartBtn}
          userLetters={userLetters}
          lastLetter={lastLetter}
          numberOfErrors={numberOfErrors}
          handleChange={handleChange}
          word={word}
        />
      ) : (
        <h3>
          {" "}
          Click start to play!
          <button onClick={handleStartBtn} className="start__button">
            START
          </button>
        </h3>
      )}

      <GameIllustration numberOfErrors={numberOfErrors} />
      <Footer />
    </>
  );
}

export default App;
