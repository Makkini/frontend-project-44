import readlineSync from 'readline-sync';

export const greetings = () => {
  console.log('Welcome to the Brain Games!');
  if (process.env.NODE_ENV !== 'test') {
    const name = readlineSync.question('May I have your name? ');
    console.log(`Hello, ${name}!`);
    return name;
  }
  return 'Test User'; // или какое-то фиксированное имя для тестов
};
