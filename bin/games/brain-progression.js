import {game} from "../../src/index.js";
import {generateExpressionProgression} from "../../src/utils.js";


export const progressionGame = (name) => {
    console.log("What number is missing in the progression?")
    const getQuestion = () => {
        return generateExpressionProgression()
    }
    const getCorrectAnswer = (question) => {
        const arr = question.split(" ")
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] === "..") {
                return (+arr[i - 1] + +arr[i - 1] - +arr[i - 2]).toString()
            }
        }
    }
    game(name, getQuestion, getCorrectAnswer);
}