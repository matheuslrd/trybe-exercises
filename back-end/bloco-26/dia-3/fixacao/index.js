import express from 'express';

const app = express();

const PORT = 8000;

app.get('/', (_req, res) => {
  res.send('Express + Typescript');
});

app.listen(PORT, () => console.log(`Ouvindo na porta ${PORT}`));