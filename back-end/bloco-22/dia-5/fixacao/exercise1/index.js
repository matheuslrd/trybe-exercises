const express = require('express');

const app = express();

const port = 3000;

function validatePrice(req, res) {
  const { price } = req.body;
  const priceNumber = Number(price);

  if (!price) return res.status(401).json({ message: 'Erro, preço não pode ficar em branco!' });

  if(price < 0) return res.status(401).json({ message: 'Preço não pode ser menor que 0' });

  next();
}

app.put('/recipes/:id', validatePrice);

app.listen(port, () => {
  console.log('Escutando na porta 3000!');
});