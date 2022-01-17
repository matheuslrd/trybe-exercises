const express = require('express');

const userRegister = require('./middlewares/userRegister');

const app = express();

const port = 3000;

app.listen(port, () => {
  console.log('Ouvindo na porta 3000!');
});
