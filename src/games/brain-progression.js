import { gameCreate } from '../index.js';
import { generateExpressionProgression } from '../utils.js';

export const progressionGame = () => {
  const getQuestion = () => generateExpressionProgression();
  const getCorrectAnswer = (question) => {
    const arr = question.split(' ').map((el) => (el === '..' ? el : Number(el)));
    const index = arr.indexOf('..');
    const diff = arr[1] - arr[0];
    return (arr[index - 1] + diff).toString();
  };

  const gameDescription = 'What number is missing in the progression?';
  gameCreate(getQuestion, getCorrectAnswer, gameDescription);
};
