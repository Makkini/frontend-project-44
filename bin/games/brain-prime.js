import {game} from "../../src/index.js";
import {getRandomInt} from "../../src/utils.js";

const isPrime = num => {
    for(let i = 2; i <= Math.sqrt(num); i++) {
        if(num % i === 0) return false;
    }
    return num > 1;
}


export const isPrimeGame = (name) => {
    console.log("Answer \"yes\" if given number is prime. Otherwise answer \"no\".")
    const getQuestion = () => {
        return getRandomInt()
    }
    const getCorrectAnswer = (question) => {
        return isPrime(question) ? "yes" : "no";
    }
    game(name, getQuestion, getCorrectAnswer);
}