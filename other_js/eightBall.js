var userName = '';
console.log(`Hello, ${userName}!`);
var userQuestion = '';
console.log(`You asked: ${userQuestion}`);
var randomNumber = Math.floor(Math.random() * 8);
var eightBall = '';
if (randomNumber == 0) {
  eightBall = console.log('It is certain');
} else if (randomNumber == 1) {
  eightBall = console.log('It is decidedly so');
} else if (randomNumber == 2) {
  eightBall = console.log('Reply hazy try again');
} else if (randomNumber == 3) {
  eightBall = console.log('Cannot predict now');
} else if (randomNumber == 4) {
  eightBall = console.log('Do not count on it');
} else if (randomNumber == 5) {
  eightBall = console.log('My sources say no');
} else if (randomNumber == 6) {
  eightBall = console.log('Outlook not so good');
} else if (randomNumber == 7) {
  eightBall = console.log('Signs point to yes');
}

console.log(eightBall);