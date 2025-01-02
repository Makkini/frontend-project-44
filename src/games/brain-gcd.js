import startGame from '../index.js';
import getRandomInt from '../utils.js';

const gcdFound = (a, b) => {
  let num1 = Math.abs(a); // Создаем копии параметров
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

const getRandomGcdNums = () => `${getRandomInt(40)} ${getRandomInt(40)}`;

const startGcdGame = () => {
  const getQuestion = () => getRandomGcdNums();
  const getCorrectAnswer = (question) => {
    const twoNums = question.split(' ');
    return gcdFound(twoNums[0], twoNums[1]).toString();
  };
  const gameDescription = 'Find the greatest common divisor of given numbers.';
  startGame(getQuestion, getCorrectAnswer, gameDescription);
};

export default startGcdGame;
