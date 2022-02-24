const getApiData = () => {
  return fetch("https://palabras-aleatorias-public-api.herokuapp.com/random")
    .then((response) => response.json())
    .then((response) => {
      const result = response.body.Word;

      return console.log(result);
    });
};
export default getApiData;
