import readlineSync from 'readline-sync';

function greetings() {
    return console.log('Welcome to the Brain Games!');
}

function name(question = 'May I have your name? ') {
    var userName = readlineSync.question(question);
    console.log('Hi ' + userName + '!');
}

export { name, greetings };
