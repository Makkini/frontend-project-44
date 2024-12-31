import { gameCreate } from '../index.js';
import { getRandomExpression } from '../utils.js';

export const calcGame = () => {
  const getQuestion = () => getRandomExpression();
  const getCorrectAnswer = (question) => {
    const splitExpression = question.split(' ');
    const num1 = +splitExpression[0];
    const operator = splitExpression[1];
    const num2 = +splitExpression[2];

    if (operator === '+') {
      return (num1 + num2).toString();
    } if (operator === '-') {
      return (num1 - num2).toString();
    } if (operator === '*') {
      return (num1 * num2).toString();
    }
    return null;
  };
  const gameDescription = 'What is the result of the expression?';
  gameCreate(getQuestion, getCorrectAnswer, gameDescription);
};
