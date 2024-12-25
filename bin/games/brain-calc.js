import {game} from "../../src/index.js";
import {getRandomExpression} from "../../src/utils.js";


export const calcGame = (name) => {
    console.log("What is the result of the expression?")
    const getQuestion = () => {
        return getRandomExpression();
    }
    const getCorrectAnswer = (question) => {
        const splitExpression = question.split(" ");
        const num1 = +splitExpression[0];
        const operator = splitExpression[1];
        const num2 = +splitExpression[2];

        if (operator === "+") {
            return (num1 + num2).toString();
        } else if (operator === "-") {
            return (num1 - num2).toString();
        } else if (operator === "*") {
            return (num1 * num2).toString();
        }
    }
    game(name, getQuestion, getCorrectAnswer);
}