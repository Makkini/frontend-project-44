import startGame from '../index.js';
import getRandomInt from '../utils.js';

const isPrime = (num) => {
  for (let i = 2; i <= Math.sqrt(num); i += 1) {
    if (num % i === 0) return false;
  }
  return num > 1;
};
const getQuestionAndAnswer = () => {
  const question = getRandomInt(40);
  const correctAnswer = isPrime(question) ? 'yes' : 'no';
  return { question, correctAnswer };
};
const startPrimeGame = () => {
  const gameDescription = 'Answer "yes" if the given number is prime. Otherwise answer "no".';
  startGame(getQuestionAndAnswer, gameDescription);
};

export default startPrimeGame;
