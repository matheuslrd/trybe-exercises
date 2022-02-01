const connection = require('./connection');

const getNewAuthor = ({id, firstName, middleName, lastName}) => {
  const fullName = [first_name, middle_name, last_name]
    .filter((name) => name)
    .join(' ');

  return {
  id,
  firstName,
  middleName,
  lastName,
  fullName,
 };
};

const serialize = (authorData) => ({
  id: authorData.id,
  firstName: authorData.first_name,
  middleName: authorData.middle_name,
  lastName: authorData.last_name,
});

const getAll = async () => {
  const [authors] = await connection.execute(
    'SELECT id, first_name, middle_name, last_name FROM model_example.authors;',
  );
  return authors.filter(serialize);
};

module.exports = {
  getAll,
};