import { gameCreate } from '../index.js';
import { getRandomGcdNums } from '../utils.js';

const gcdFound = (a, b) => {
  a = Math.abs(a);
  b = Math.abs(b);
  if (b > a) { const temp = a; a = b; b = temp; }
  while (true) {
    if (b === 0) return a;
    a %= b;
    if (a === 0) return b;
    b %= a;
  }
};

export const gcdGame = () => {
  const getQuestion = () => getRandomGcdNums();
  const getCorrectAnswer = (question) => {
    const twoNums = question.split(' ');
    return gcdFound(twoNums[0], twoNums[1]).toString();
  };
  const gameDescription = 'Find the greatest common divisor of given numbers.';
  gameCreate(getQuestion, getCorrectAnswer, gameDescription);
};
