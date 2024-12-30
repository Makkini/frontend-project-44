import { gameCreate } from '../index.js';
import { getRandomInt } from '../utils.js';

const isPrime = (num) => {
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false;
  }
  return num > 1;
};

export const isPrimeGame = (name) => {
  console.log('Answer "yes" if given number is prime. Otherwise answer "no".');
  const getQuestion = () => getRandomInt(40);
  const getCorrectAnswer = (question) => (isPrime(question) ? 'yes' : 'no');
  gameCreate(name, getQuestion, getCorrectAnswer);
};
