var myAge = 3//set variable for user's human age
var earlyYears = 2 //variable for first 2 years of a cat's life
earlyYears = earlyYears * 25 //accounts for first 2 years of a cat's life, where they mature faster
laterYears = myAge - 2
laterYears *= 4

var myAgeInCatYears = earlyYears + laterYears

console.log('My age is ' + myAge + ' and that is about ' + myAgeInCatYears + ' years old in cat years.')