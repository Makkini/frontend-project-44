import { gameCreate } from '../index.js';
import { generateExpressionProgression } from '../utils.js';

export const progressionGame = (name) => {
  console.log('What number is missing in the progression?');
  const getQuestion = () => generateExpressionProgression();
  const getCorrectAnswer = (question) => {
    const arr = question.split(' ');
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] === '..') {
        return (+arr[i - 1] + +arr[i - 1] - +arr[i - 2]).toString();
      }
    }
  };
  gameCreate(name, getQuestion, getCorrectAnswer);
};
