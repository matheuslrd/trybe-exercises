const names = ['João', 'Iren', 'Fernando', 'Maria'];

const findNameWithFiveLetters = (name) => {
  // Adicione seu código aqui:
  if (name.length > 5) {
    return name;
  }
}

const verifiedLetters = names.find(findNameWithFiveLetters);

console.log(verifiedLetters);