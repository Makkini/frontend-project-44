import startGame from '../index.js';
import getRandomInt from '../utils.js';

const progressionLength = 10;

export const generateExpressionProgression = (start, diff, hiddenIndex) => {
  const progression = Array.from({ length: progressionLength }, (_, i) => start + i * diff);
  progression[hiddenIndex] = '..';
  return progression;
};

const getQuestionAndAnswer = () => {
  const start = getRandomInt(40);
  const diff = getRandomInt(10) + 1;
  const hiddenIndex = getRandomInt(7) + 2;
  const progression = generateExpressionProgression(start, diff, hiddenIndex);
  const question = progression.join(' ');
  const correctAnswer = (start + hiddenIndex * diff).toString();
  return { question, correctAnswer };
};

const startProgressionGame = () => {
  const gameDescription = 'What number is missing in the progression?';
  startGame(getQuestionAndAnswer, gameDescription);
};

export default startProgressionGame;
