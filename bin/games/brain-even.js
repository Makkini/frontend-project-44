import {game} from "../../src/index.js";
import {getRandomInt} from "../../src/utils.js";


const isEven = (number) => number % 2 === 0;

export const evenOddGame = (name) => {
    console.log("Answer \"yes\" if the number is even, otherwise answer \"no\".")
    const getQuestion = () => {
        return getRandomInt();
    }
    const getCorrectAnswer = (question) => {
        return isEven(question) ? 'yes' : 'no';
    }
    game(name, getQuestion, getCorrectAnswer);
}

