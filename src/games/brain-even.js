import { gameCreate } from '../index.js';
import { getRandomInt } from '../utils.js';

const isEven = (number) => number % 2 === 0;

export const evenOddGame = (name) => {
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  const getQuestion = () => getRandomInt(40);
  const getCorrectAnswer = (question) => (isEven(question) ? 'yes' : 'no');
  gameCreate(name, getQuestion, getCorrectAnswer);
};
