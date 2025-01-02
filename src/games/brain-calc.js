import startGame from '../index.js';
import getRandomInt from '../utils.js';

const getRandomSign = () => {
  const randomNum = Math.random() * 100;
  if (randomNum < 33) {
    return '+';
  } if (randomNum < 66) {
    return '-';
  }
  return '*';
};
const getRandomExpression = () => `${getRandomInt(40)} ${getRandomSign()} ${getRandomInt(40)}`;

// eslint-disable-next-line consistent-return
const generateExpression = (operator, num1, num2) => {
  if (operator === '+') {
    return (num1 + num2).toString();
  } if (operator === '-') {
    return (num1 - num2).toString();
  } if (operator === '*') {
    return (num1 * num2).toString();
  }
};

const startCalcGame = () => {
  const getQuestion = () => getRandomExpression();
  const getCorrectAnswer = (question) => {
    const splitExpression = question.split(' ');
    const num1 = +splitExpression[0];
    const operator = splitExpression[1];
    const num2 = +splitExpression[2];

    return generateExpression(operator, num1, num2);
  };
  const gameDescription = 'What is the result of the expression?';
  startGame(getQuestion, getCorrectAnswer, gameDescription);
};

export default startCalcGame;
