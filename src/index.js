import readlineSync from 'readline-sync';
import { greetings } from './cli.js';

export const gameCreate = (questionGenerationFunc, correctAnswerFunc, gameDescription) => {
  const name = greetings();
  console.log(gameDescription);

  let gameContinueFlag = true;
  for (let i = 0; i < 3 && gameContinueFlag; i++) {
    const question = questionGenerationFunc();
    const correctAnswer = correctAnswerFunc(question);
    console.log('Question: ', question);
    const userAnswer = readlineSync.question('Your answer: ');
    if (userAnswer === correctAnswer) {
      console.log('Correct!');
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      console.log(`Let's try again, ${name}!`);
      gameContinueFlag = false;
    }

    if (i === 2 && gameContinueFlag) {
      console.log(`Congratulations, ${name}!`);
    }
  }
};
