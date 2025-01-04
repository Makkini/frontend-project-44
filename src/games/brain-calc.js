import startGame from '../index.js';
import getRandomInt from '../utils.js';

const getRandomSign = () => {
  const signs = ['+', '-', '*'];
  return signs[getRandomInt(3)];
};

const generateExpression = (operator, num1, num2) => {
  if (operator === '+') {
    return (num1 + num2);
  } if (operator === '-') {
    return (num1 - num2);
  } if (operator === '*') {
    return (num1 * num2);
  }
  throw new Error(`Invalid operator: ${operator}`);
};

const getQuestionAndAnswer = () => {
  const num1 = getRandomInt(40);
  const num2 = getRandomInt(40);
  const operator = getRandomSign();
  const question = `${num1} ${operator} ${num2}`;
  const correctAnswer = generateExpression(operator, num1, num2).toString();
  return { question, correctAnswer };
};

const startCalcGame = () => {
  const gameDescription = 'What is the result of the expression?';
  startGame(getQuestionAndAnswer, gameDescription);
};

export default startCalcGame;
