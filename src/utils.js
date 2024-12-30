export const getRandomInt = (factor) => Math.floor(Math.random() * factor);
export const getRandomGcdNums = () => `${getRandomInt(40)} ${getRandomInt(40)}`;
export const getRandomExpression = () => `${getRandomInt(40)} ${getRandomSign()} ${getRandomInt(40)}`;

export const generateExpressionProgression = () => {
  const arrayExpression = [getRandomInt(40)];
  const diffProgressionAndIndex = getRandomInt(10);
  for (let i = 0; i < 10; i++) {
    arrayExpression.push(arrayExpression[i] + diffProgressionAndIndex);
  }
  arrayExpression[diffProgressionAndIndex] = '..';
  return arrayExpression.join(' ');
};

const getRandomSign = () => {
  const randomNum = Math.random() * 100;
  if (randomNum < 33) {
    return '+';
  } if (randomNum < 66) {
    return '-';
  }
  return '*';
};
