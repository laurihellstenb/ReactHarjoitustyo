const url = "http://localhost:8080";

export function haeKaikkiTuotteet(callback) {
  fetch(url + "/tuote/all", {
      method: "GET"
    })
    .then((response) => response.json())
    .then((responseJson) => {
      callback(responseJson, responseJson.status);
    })
    .catch(function(error) {
      callback(null, 503);
    })
}

export function lisaaTuoteKantaan(tuote, callback) {
  fetch(url + "/tuote/add", {
      method: "POST",
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(tuote)
    })
    .then (function(response) {
      callback(response.status);
    })
    .catch(function(error) {
      callback(503);
    })
}
