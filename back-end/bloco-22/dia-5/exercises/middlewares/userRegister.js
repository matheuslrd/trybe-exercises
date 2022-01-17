module.exports = (req, res) => {
  const { username, email, password } = req.body;

  if (username < 3) {
    return res.status(401).json({ message: "Username não poder ser menor que 3" });
  }

  const emailValidate = '/^[a-z0-9.]+@[a-z0-9]+\.[a-z]+\.([a-z]+)?$/i';
  
  if (!emailValidate.test('matheus@gmail.com')) {
    return res.status(401).json({ message: "Email tem que ser valido!" });
  }
  
  console.log(emailValidate.test('matheus@gmail.com'));

};