import { gameCreate } from '../index.js';
import { getRandomInt } from '../utils.js';

const isEven = (number) => number % 2 === 0;

export const evenOddGame = () => {
  const getQuestion = () => getRandomInt(40);
  const getCorrectAnswer = (question) => (isEven(question) ? 'yes' : 'no');

  const gameDescription = 'Answer "yes" if the number is even, otherwise answer "no".';
  gameCreate(getQuestion, getCorrectAnswer, gameDescription);
};
