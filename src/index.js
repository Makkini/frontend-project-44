import readlineSync from "readline-sync";


export const game = (name, questionGenerationFunc, correctAnswerFunc) => {
    let gameContinueFlag = true;
    let answerCount = 0;
    while (gameContinueFlag && answerCount !== 3) {
        const question = questionGenerationFunc();
        const correctAnswer = correctAnswerFunc(question);
        console.log("Question: ", question);
        const userAnswer = readlineSync.question('Your answer: ');
        if (userAnswer === correctAnswer) {
            console.log('Correct!');
            answerCount++;
        } else {
            console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
            console.log(`Let's try again, ${name}!`);
            gameContinueFlag = false;
        }

    }
    if (answerCount === 3) {
        console.log(`Congratulations, ${name}!`);
    }
}

