const express = require('express');
const Author = require('./models/Author');

const app = express();

const PORT = process.env.PORT || 3000;

app.get('/author', (req, res) => {
  const authors = await Author.getAll();

  res.status(200).json(authors);
});

app.listen(PORT, () => {
    console.log(`Ouvindo a porta ${PORT}`);
});