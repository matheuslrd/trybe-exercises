const connection = require('../connection');

const create = async ({ title, directBy, releaseYear }) => {
  const query = `INSERT INTO model_examples.movies (title, direct_by, release_year)
  VALUES (?, ?, ?)`;

  const [result] = await connection.execute(query, [title, directBy, releaseYear]);

  return {
    id: result.insertId,
  };
};

module.exports = {
  create,
};
