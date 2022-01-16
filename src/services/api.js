/*
const getApiData = () => {
  return fetch("https://palabras-aleatorias-public-api.herokuapp.com/random")
  .then((response) => response.json())
    .then((data) => console.log("API funcionando");
};
export default getApiData;
*/
const button = document.getElementsByClassName("start__button");
button.addEventListener("click", () => {
  // fetch("https://palabras-aleatorias-public-api.herokuapp.com/random").then(
  //   (res) => console.log(res)
  // );
  console.log("Click");
});
