const express = require('express');
const bodyParser = require('body-parser');

const app = express();

const PORT = 3000;

app.use(bodyParser.json());

app.route('/user')
  .post(addUser);

app.listen(PORT, () => {
  console.log('Ouvindo na porta 3000!');
});
