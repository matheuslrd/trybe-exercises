const RIGHT_ANSWERS = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const STUDENT_ANSWERS = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];

const answersCheck = (rightAnswers, studentAnswers, callback) => {
  return callback(rightAnswers, studentAnswers);
};

const checkAnswers = (a, b) => {
  let count = 0;
  for (let index = 0; index < a.length; index += 1) {
    if (a[index] === b[index]) {
      count += 1
    } else if (b[index] === 'N.A') {
      true;
    } else {
      count -= 0.5;
    }
  }
  return count;
};

console.log(answersCheck(RIGHT_ANSWERS, STUDENT_ANSWERS, checkAnswers));



