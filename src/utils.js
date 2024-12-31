export const getRandomInt = (factor) => Math.floor(Math.random() * factor);
const getRandomSign = () => {
  const randomNum = Math.random() * 100;
  if (randomNum < 33) {
    return '+';
  } if (randomNum < 66) {
    return '-';
  }
  return '*';
};
export const getRandomGcdNums = () => `${getRandomInt(40)} ${getRandomInt(40)}`;
export const getRandomExpression = () => `${getRandomInt(40)} ${getRandomSign()} ${getRandomInt(40)}`;

export const generateExpressionProgression = () => {
  const start = getRandomInt(40);
  const diff = getRandomInt(10) + 1;
  const hiddenIndex = getRandomInt(10);
  const progression = Array.from({ length: 10 }, (_, i) => start + i * diff);
  progression[hiddenIndex] = '..';
  return progression.join(' ');
};
