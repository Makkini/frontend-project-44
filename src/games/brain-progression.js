import { gameCreate } from '../index.js';
import { generateExpressionProgression } from '../utils.js';

export const progressionGame = () => {
    const getQuestion = () => generateExpressionProgression();
    const getCorrectAnswer = (question) => {
        const arr = question.split(' ').map((el) => (el === '..' ? el : Number(el)));
        const index = arr.indexOf('..');
        const diff = arr.find((el, idx) => idx > 0 && typeof el === 'number') - arr.find((el, idx) => idx === 0 && typeof el === 'number');

        if (index === 0) {
            return (arr[1] - diff).toString();
        }

        if (index > 0 && index < arr.length - 1) {
            return (arr[index - 1] + diff).toString();
        }

        if (index === arr.length - 1) {
            return (arr[index - 1] + diff).toString();
        }
        return null;
    };

    const gameDescription = 'What number is missing in the progression?';
    gameCreate(getQuestion, getCorrectAnswer, gameDescription);
};
