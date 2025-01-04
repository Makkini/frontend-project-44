import startGame from '../index.js';
import getRandomInt from '../utils.js';

export const generateExpressionProgression = () => {
  const start = getRandomInt(40);
  const diff = getRandomInt(10) + 1;
  const hiddenIndex = getRandomInt(7) + 2;
  const progression = Array.from({ length: 10 }, (_, i) => start + i * diff);
  progression[hiddenIndex] = '..';
  return {
    progression, start, diff, hiddenIndex,
  };
};

const getQuestionAndAnswer = () => {
  const {
    progression, start, diff, hiddenIndex,
  } = generateExpressionProgression();
  const question = progression.join(' ');
  const correctAnswer = (start + hiddenIndex * diff).toString();
  return { question, correctAnswer };
};

const startProgressionGame = () => {
  const gameDescription = 'What number is missing in the progression?';
  startGame(getQuestionAndAnswer, gameDescription);
};

export default startProgressionGame;
