import startGame from '../index.js';
import getRandomInt from '../utils.js';

const isEven = (number) => number % 2 === 0;

const startEvenGame = () => {
  const getQuestion = () => getRandomInt(40);
  const getCorrectAnswer = (question) => (isEven(question) ? 'yes' : 'no');

  const gameDescription = 'Answer "yes" if the number is even, otherwise answer "no".';
  startGame(getQuestion, getCorrectAnswer, gameDescription);
};

export default startEvenGame;
