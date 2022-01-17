const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

const port = 3000;

app.get('/ping', (req, res) => {
  res.json({ message: 'pong' });
});

fetch(`http://localhost:3000/hello/`, {
  method: 'POST',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    name: 'Macarrão com Frango'
  })
});

app.post('/hello', (req, res) => {
  const { name } = req.body;
  
  req.json({ message: `Hello, ${ name }!` });
});


app.listen(port, () => {
  console.log('Escutando na porta 3000!');
});
