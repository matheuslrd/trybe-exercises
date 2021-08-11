// apiScript.js     
const API_URL = 'https://icanhazdadjoke.com/';
const jokeContainer = document.querySelector('#jokeContainer');

const fetchJoke = () => {
  const myObject = {
    method: 'GET',
    headers: { 'Accept': 'application/json' }
  };

  const objJoke = fetch(API_URL, myObject)
    .then(response => response.json())
    .then(data => {
      jokeContainer.innerText = data.joke;
    });
};

window.onload = () => fetchJoke();

function fetchPromisse() {
  const promise = new Promise((resolve, reject) => {
    const arr = [];

    for (let count = 1; count <= 10; count++) {
      const element = arr[count];
      const randomNumber = Math.floor(Math.random() * 51);
      const randomNumberEnhance = Math.pow(randomNumber, 2);
      arr.push(randomNumberEnhance);
    }

    const reduceArr = arr.reduce((acc, value) => acc += value);
    (reduceArr < 8000) ? resolve('Promise resolvida') : reject('Promise rejeitada');
  });

  promise
    .then((response) => console.log(response))
    .catch((error) => console.log(error));
}

fetchPromisse();