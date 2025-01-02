import startGame from '../index.js';
import getRandomInt from '../utils.js';

export const generateExpressionProgression = () => {
  const start = getRandomInt(40);
  const diff = getRandomInt(10) + 1;
  const hiddenIndex = getRandomInt(7) + 2;
  const progression = Array.from({ length: 10 }, (_, i) => start + i * diff);
  progression[hiddenIndex] = '..';
  return progression.join(' ');
};

const startProgressionGame = () => {
  const getQuestion = () => generateExpressionProgression();
  // eslint-disable-next-line consistent-return
  const getCorrectAnswer = (question) => {
    const arr = question.split(' ');
    for (let i = 0; i < arr.length; i += 1) {
      if (arr[i] === '..') {
        return (+arr[i - 1] + +arr[i - 1] - +arr[i - 2]).toString();
      }
    }
  };

  const gameDescription = 'What number is missing in the progression?';
  startGame(getQuestion, getCorrectAnswer, gameDescription);
};

export default startProgressionGame;
