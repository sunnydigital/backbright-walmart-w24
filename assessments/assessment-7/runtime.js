const perf = require('execution-time')();


function doublerAppend(nums){

    let new_nums = [];

    for (let i = 0; i < nums.length; i++){
        let num = nums[i] * 2;
        new_nums.push(num);
    }
    return new_nums;
}


function doublerInsert(nums){

    let new_nums = [];

    for (let i = 0; i < nums.length; i++){
        let num = nums[i] * 2;
        new_nums.unshift(num);
    }
    return new_nums;
}


function getSizedArray(size){
    let array = [];
    for (let i = 0; i < size; i++){
        array.push(i);
    }
    return array;
}


const tinyArray = getSizedArray(10);
const smallArray = getSizedArray(100);
const mediumArray = getSizedArray(1000);
const largeArray = getSizedArray(10000);
const extraLargeArray = getSizedArray(100000);

let selectedArray = largeArray

// How long does it take to double every number in a given 
// array? 

// Try it with first function
perf.start();                     // Starts timer
doublerAppend(selectedArray);
let resultsAppend = perf.stop();  // Stops timer and save time results


// Try it with second function
perf.start();
doublerInsert(selectedArray);
let resultsInsert = perf.stop();


console.log(`Results for the selected array`);
console.log("unshift", resultsInsert.preciseWords);
console.log("push", resultsAppend.preciseWords);
