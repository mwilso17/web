var randomBodyParts = ['head', 'shoulders', 'knees', 'toes'];
var randomAdjectives = ['big', 'small', 'gross', 'smelly'];
var randomWords = ['random', 'cat', 'dog', 'blue', 'orange'];

var randomBodyPart = randomBodyParts[Math.floor(Math.random() * 3)];
var randomAdjective = randomAdjectives[Math.floor(Math.random() * 3)];
var randomWord = randomWords[Math.floor(Math.random() * 3)];

console.log(`Your ${randomBodyPart} is like a ${randomAdjective} ${randomWord}`)