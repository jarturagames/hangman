//Getting API with FETCH

// const getApiData = () => {
//   return fetch("https://palabras-aleatorias-public-api.herokuapp.com/random")
//     .then((response) => response.json())
//     .then((response) => {
//       const result = response.body.Word;

//       return console.log(result);
//     });
// };
// export default getApiData;

//Getting API with async await. To works it needs the line 9 at App.js (import the component). I think is for the state
const getApiData = () => {
  const getWord = async () => {
    const url = "https://palabras-aleatorias-public-api.herokuapp.com/random";
    const resp = await fetch(url);
    const data = await resp.json();
    console.log(data.body.Word);
  };
  getWord();
};
getApiData();
