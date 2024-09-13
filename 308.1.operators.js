// The initial numbers that must be verified.
const n1 = 10;
const n2 = 15;
const n3 = 20;
const n4 = 5;

// Check if all numbers are divisible by 5. Cache the result in a variable.
//Method 1. "Check if all the numbers are divisible by 5"
let numbers = [n1, n2, n3, n4]
let divBy = 5

function divisiblebyX(numbers, divBy){
  for (let i = 0; i < numbers.length; i++) {
    result = ((n1 % divBy)===0)
    console.log(`The ${i+1}st number is divisible by ${divBy}: ${result}`)
  }
}
divisiblebyX(numbers, 5);

//Method 2. "Check if ALL the numbers are divisible by 5"
numbers = [n1, n2, n3, n4]
divBy = 5

function allDivisibleByX (numbr, divBy) {
  return(( numbr % divBy)===0) 
}
const isDivisibleByX = [];
for (let i = 0; i < numbers.length; i++) {
  if (allDivisibleByX(numbers[i])) {
    isDivisibleByX.push(numbers[i]);
  }
  console.log(typeof(i))
  console.log( numbers[3])
}
console.log(`All numbers divisible by ${divBy}: ${isDivisibleByX}`);

// Check if the first number is larger than the last. Cache the result in a variable.
const firstLargerThanLast = (n1 > n4);
console.log(`First number larger than last: ${firstLargerThanLast}`);

// Accomplish the following arithmetic chain:
// Subtract the first number from the second number.
// Multiply the result by the third number.
// Find the remainder of dividing the result by the fourth number.

// The math way
ans = ((n2 - n1) *3) % n4 
console.log(`The the calculated result: ${ans}`);

// Another way of doing it, by reassigning a variable. 
let math = n2 - n1;
math *= n3;
math %= n4;
console.log(`The calculated result using variable reassignment: ${math}`);


// Pt 2
const tripDistance = 1500
const fuelBudget = 175
const costPerGallon = 3
let mph, efficiency, gallonsNeeded, totalFuelCost, tripDuration

mph = 55
efficiency = 30
gallonsNeeded = (tripDistance / efficiency).toFixed(2)
totalFuelCost = (gallonsNeeded * costPerGallon).toFixed(2)
tripDuration = (tripDistance / mph).toFixed(2)

console.log("at 55 MPH:");
console.log(`Gas Needed: ${gallonsNeeded} gallons`);
console.log(`Fuel Cost: $${totalFuelCost}`);
console.log(`Trip Duration: ${tripDuration} hours`);
console.log(`Do we have enough money? ${fuelBudget >= totalFuelCost}`);

mph = 60
efficiency = 28
gallonsNeeded = (tripDistance / efficiency).toFixed(2)
totalFuelCost = (gallonsNeeded * costPerGallon).toFixed(2)
tripDuration = (tripDistance / mph).toFixed(2);
console.log("At 60 MPH:");
console.log(`Gas Needed: ${gallonsNeeded} gallons`);
console.log(`Fuel Cost: $${totalFuelCost}`);
console.log(`Trip Duration: ${tripDuration} hours`);
console.log(`Do we have enough money? ${fuelBudget >= totalFuelCost}`);

mph = 75
efficiency = 23
gallonsNeeded = (tripDistance / efficiency).toFixed(2)
totalFuelCost = (gallonsNeeded * costPerGallon).toFixed(2)
tripDuration = (tripDistance / mph).toFixed(2);

console.log("At 75 MPH:");
console.log(`Gas Needed: ${gallonsNeeded} gallons`);
console.log(`Fuel Cost: $${totalFuelCost}`);
console.log(`Trip Duration: ${tripDuration} hours`);
console.log(`Do we have enough money? ${fuelBudget >= totalFuelCost}`)