import startGame from '../index.js';
import getRandomInt from '../utils.js';

const gcdFound = (a, b) => {
  let num1 = Math.abs(a);
  let num2 = Math.abs(b);
  if (num2 > num1) {
    const temp = num1;
    num1 = num2;
    num2 = temp;
  }
  while (true) {
    if (num2 === 0) return num1;
    num1 %= num2;
    if (num1 === 0) return num2;
    num2 %= num1;
  }
};

const getQuestionAndAnswer = () => {
  const num1 = getRandomInt(40);
  const num2 = getRandomInt(40);
  const question = `${num1} ${num2}`;
  const correctAnswer = gcdFound(num1, num2).toString();
  return { question, correctAnswer };
};

const startGcdGame = () => {
  const gameDescription = 'Find the greatest common divisor of given numbers.';
  startGame(getQuestionAndAnswer, gameDescription);
};

export default startGcdGame;
