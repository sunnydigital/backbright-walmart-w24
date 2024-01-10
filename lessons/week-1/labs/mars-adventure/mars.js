alert('Starting your mars Adventure!');
alert('Booring up...');
alert('All systems go!');
alert('Let\'s start!');

const name = prompt('Hi there, what\'s your name?');
alert('Hi there, ${name} --- Welcome to the Mars Adventure Game.');

alert('Yesterday, you received a call from your good friend at NASA.');
alert('They said someone is going to Mars for the weekend, and YOU\'VE been chosen!!');

const flag = 1;
while ( flag != 0 ) {

    const excited = prompt('Are you excited? (Type Y or N)');

    if ( excited !== 'Y' || excited != 'N' ) {
        continue;
    } else if ( excited === 'Y' ) {
        alert('I knew you\'d say that. It\'s so cool that you\'re going to Mars!');
    } else {
        alert('Well, it\'s too late to back out now.');
    }
    flag = 0;
}

let excited = prompt('Are you Excited? (Type Y or N)');
excited = excited.toUpperCase;

alert('It\'s time to pack for your trip to Mars.');
let numSuitcases = prompt ('How many suitcases do you plan to bring?');

numSuitcases = Number(numSuitcases);

alert("You're allowed to bring one companion animal with you.");

const companionType = prompt('What kind of companion animal would you like to bring?');
const companionName = prompt("What is your companion's name?");

let companionName = 'hammy';

let firstLetter = companionName[0];
console.log(firstLetter); // h

