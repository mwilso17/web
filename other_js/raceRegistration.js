let raceNumber = Math.floor(Math.random() * 1000);
var earlyRegistration = true;
var runnerAge = 18;
if (runnerAge >= 19 && earlyRegistration == true) {
  console.log('Your race time is 9:30am.');
  console.log(`Your race number is ${raceNumber}.`);
} else if (runnerAge >= 19 && earlyRegistration == false) {
  console.log('Your race time is 11:00am.');
  console.log(`Your race number is ${raceNumber}.`);
} else if (runnerAge <= 17) {
   console.log('Your race time is 12:30pm.');
   console.log(`Your race number is ${raceNumber}.`);
} else {
  console.log('Please see the registration desk.')
}

//Program incomplete. Need to fix bugs