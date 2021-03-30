const isDevEnviroment = process.env.NODE_ENV === "development"; // Booleano
const apiUrl = isDevEnviroment
  ? "http://localhost:3000/card"
  : "https://react-mad-women.herokuapp.com/card";

function api(data) {
  // return fetch("https://awesome-profile-cards-madwomen.herokuapp.com/card", {
  return fetch(apiUrl, {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((response) => response.json())
    .then((data) => {
      return data;
    })
    .catch(() => {
      return {
        success: false,
        error: "Se ha producido un error. Inténtelo más tarde",
      };
    });
}
export default api;
