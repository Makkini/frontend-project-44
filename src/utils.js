export const getRandomInt = () => {
    return Math.floor(Math.random() * 40);
}
export const getRandomGcdNums = () => {
    return `${getRandomInt()} ${getRandomInt()}`;
}
export const getRandomExpression = () => {
    return `${getRandomInt()} ${getRandomSign()} ${getRandomInt()}`;
}

export const generateExpressionProgression = () => {
    const arrayExpression = [getRandomInt()]
    const diffProgressionAndIndex = getRandomIndex();
    for (let i = 0; i < 10; i++) {
        arrayExpression.push(arrayExpression[i]+diffProgressionAndIndex);
    }
    arrayExpression[diffProgressionAndIndex] = ".."
    return arrayExpression.join(' ');
}

const getRandomSign = () => {
    const randomNum = Math.random() * 100;
    if (randomNum < 33) {
        return '+';
    } else if (randomNum < 66) {
        return '-';
    } else {
        return '*';
    }
};

const getRandomIndex = () => {
    return Math.floor(Math.random() * 10);
}