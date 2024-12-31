import { gameCreate } from '../index.js';
import { getRandomInt } from '../utils.js';

const isPrime = (num) => {
  for (let i = 2; i <= Math.sqrt(num); i += 1) {
    if (num % i === 0) return false;
  }
  return num > 1;
};

export const isPrimeGame = () => {
  const getQuestion = () => getRandomInt(40);
  const getCorrectAnswer = (question) => (isPrime(question) ? 'yes' : 'no');
  const gameDescription = 'Answer "yes" if given number is prime. Otherwise answer "no".';
  gameCreate(getQuestion, getCorrectAnswer, gameDescription);
};
