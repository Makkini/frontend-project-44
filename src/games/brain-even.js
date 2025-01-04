import startGame from '../index.js';
import getRandomInt from '../utils.js';

const isEven = (number) => number % 2 === 0;

const getQuestionAndAnswer = () => {
  const question = getRandomInt(40);
  const correctAnswer = isEven(question) ? 'yes' : 'no';
  return { question, correctAnswer };
};
const startEvenGame = () => {
  const gameDescription = 'Answer "yes" if the number is even, otherwise answer "no".';
  startGame(getQuestionAndAnswer, gameDescription);
};

export default startEvenGame;
