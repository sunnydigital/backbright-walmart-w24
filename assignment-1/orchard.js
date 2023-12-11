///////////////////
// Apple Orchard //
///////////////////

/*
    The data below has been collected over the last week at an apple orchard. 
    You will be using your coding skills to gain insights into its daily 
    operations.

    Below are three arrays each containing 7 numbers. You will use them and the 
    price variables to complete the problems in this file.

    The indexes of the arrays correspond with a day of the week.
    The first array is named fujiAcres. Notice that the first item in this array 
    is 2, meaning that 2 acres of Fuji apples were picked on Monday of this week.
*/

const fujiAcres = [2, 3, 3, 2, 2, 2, 1]
const galaAcres = [5, 2, 4, 3, 6, 2, 4]
const pinkAcres = [1, 5, 4, 2, 1, 5, 4]

// PROBLEM 1

/*
    Using a for loop, calculate the total number of acres picked for the entire 
    week.

    Save the number to a variable called `totalAcres`.
    Log `totalAcres` to the console.
*/

// CODE HERE

//To calculate the number of acres picked for the week, the values from the 3 arrays will be summed

let totalAcres = 0; //Instantiate a sum variable

for ( let i = 0; i < fujiAcres.length; i++ ) { // Loops through 
    totalAcres += fujiAcres[i]; //Adds fujiAcres value for index i
    totalAcres += galaAcres[i]; //Adds galaAcres value for index i
    totalAcres += pinkAcres[i]; //Adds pinkAcres value for index i
}

console.log(totalAcres); //prints result

// PROBLEM 2

/*
    Using `totalAcres`, calculate the average number of acres picked per day. 

    (Remember that the average is the total divided by the number of days)

    Save the answer to a variable called 
    `averageDailyAcres`, and log `averageDailyAcres` to the console.
*/

// CODE HERE

let averageDailyAcres = totalAcres / 7; // Divides totalAcres by 7 (the total number of days in a week) of fujiAcres (there are 3 total arrays)

console.log(averageDailyAcres);


// PROBLEM 3

/*
    We have provided 2 variables below. 
    
    The `acresLeft` variable is the number of acres that still have apples left. 
    
    The `days` variable represents how many more days of work are left. It's 
    initialized at 0 because we're going to be using it as a counter.
    
    Write a while loop that will continue to run while `acresLeft` is above 0. 
    
    On each iteration of the loop:
    - add 1 to the `days` variable
    - subtract your daily average from the number of acres left

    Outside the loop, log `days` to the console.

    Note: This is not the most efficient way to calculate this number. You might
    think about other ways you could do it more mathematically.
*/

let acresLeft = 174 
let days = 0

// CODE HERE

while ( acresLeft > 0 ) { // Creates a while loop, WHILE the number of acres left is more than 0
    days++; // Adds one to the days counter
    acresLeft -= averageDailyAcres; // Removes one from the average daily number of acres
}

console.log(days); // Prints out the number of days to use 174 acres using the average daily number of acres

// PROBLEM 4

/*
    Your next task is to create 3 arrays that list the daily amount of apples 
    picked, in tons, for each variety. 
    
    Each acre yields 6.5 tons of apples.

    Use the variables below to store your new arrays. Make sure that you
    don't modify the original arrays on lines 36 - 38.

    Log each of your arrays to the console.

    (Hint: loop over the original arrays, calculate the tons for that day, then
    add that number into the new list)
*/

// CODE HERE

let fujiTons = [];
let galaTons = [];
let pinkTons = [];

/**For the below 3 lines of code, writes a for each 
 * loop for each fujiTons, galaTons, and pinkTons
 * pushes the number of acres * 6.5 for each element 
 * for the three fujiAcres,  galaAcres, and pinkAcres
 * respectively
 */

fujiAcres.forEach(acres => fujiTons.push(acres * 6.5));
galaAcres.forEach(acres => galaTons.push(acres * 6.5));
pinkAcres.forEach(acres => pinkTons.push(acres * 6.5));

console.log(fujiTons);
console.log(galaTons);
console.log(pinkTons);

// PROBLEM 5

/*
    Next, calculate the TOTAL number of pounds picked per variety.

    You'll need to add up the tons per each variety and convert the number 
    into pounds -- store that number in the variables given below. 

    Log each of the values to the console.

    Hint: there are 2000 pounds in a ton.
*/

// CODE HERE 

const poundInTon = 2000;

/**
 * The below 3 lines of code uses an arrow function: the "reduce" function
 * to add together the total number of tons of apples for each apple type
 * This is done by starting from 0 as the variable sum, and accmumulating the
 * value through a for-each like implementation of adding the tons 
 */
fujiTons.reduce((sum, tons) => sum + tons, 0) * poundInTon;
galaTons.reduce((sum, tons) => sum + tons, 0) * poundInTon;
pinkTons.reduce((sum, tons) => sum + tons, 0) * poundInTon;

console.log(totalFujiPounds);
console.log(totalGalaPounds);
console.log(totalPinkPounds);

// PROBLEM 6

/*
    Now that you know the total pounds per variety, use the prices below to 
    figure out how much you'll make from selling each type of apple. 

    The prices are per pound and are written in cents. 

    Log each of the profits to the console. 
*/
const fujiPrice = .89;
const galaPrice = .64;
const pinkPrice = .55;

// CODE HERE

/**
 * Below multiplies the total pounds/price of each apple type together
 */
let fujiProfit = totalFujiPounds * fujiPrice; //Multiplies pounds by profit for the below 3 lines each for the 3 different kinds of apples to get totalProfit
let galaProfit = totalGalaPounds * galaPrice;
let pinkProfit = totalPinkPounds * pinkPrice;

console.log(fujiProfit); // Outputs each of the 3 apples' profits
console.log(galaProfit);
console.log(pinkProfit);


// PROBLEM 7

/*
    Add up all your profits and save  the number to a variable called 
    `totalProfit`.

    Log `totalProfit` to the console.
*/

let totalProfit = fujiProfit + galaProfit + pinkProfit; // Below adds all profits together to get totalProfit

console.log(totalProfit); // Logs total output