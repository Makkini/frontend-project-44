import readlineSync from 'readline-sync';

const roundCount = 3;
const startGame = (questionGenerationFunc, correctAnswerFunc, gameDescription) => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  console.log(gameDescription);

  for (let i = 0; i < roundCount; i += 1) {
    const question = questionGenerationFunc();
    const correctAnswer = correctAnswerFunc(question);
    console.log('Question:', question);
    const userAnswer = readlineSync.question('Your answer: ');
    if (userAnswer === correctAnswer) {
      console.log('Correct!');
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      console.log(`Let's try again, ${name}!`);
      return;
    }

    if (i === 2) {
      console.log(`Congratulations, ${name}!`);
    }
  }
};

export default startGame;
