                 


                //  ****** Week-2 Practice-1 ******



// check if the number is even or odd --- Problem No- 2


function checkEvenOrOdd(number) {
    if (number % 2 === 0) {
      console.log(number + " is even.");
    } else {
      console.log(number + " is odd.");
    }
  }
  
  let number = 7;
  checkEvenOrOdd(number);
  

  // Sorted Random Array --- Problem No- 3

let numbers1 = [12, 5, 19, 1, 15, 8, 7, 13, 3, 17, 20, 4, 10, 6, 9, 2, 11, 18, 16, 14];

function sortArray(array) {
  return array.sort((a, b) => a - b);
}

let sortedNumbers = sortArray(numbers1);

console.log("Sorted Array: ", sortedNumbers);



// Check if a year is a leap year --- Problem No- 4

function isLeapYear(year) {
    if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
      return true;
    } else {
      return false;
    }
  }
  
  let year = 2024;
  
  if (isLeapYear(year)) {
    console.log(year + " is a leap year.");
  } else {
    console.log(year + " is not a leap year.");
  }
  

// find numbers divisible by both 3 and 5 within a range of 1 to 50 --- Problem No- 5

function findDivisibleNumbers(start, end) {
    let divisibleNumbers = [];
    
    for (let i = start; i <= end; i++) {
      if (i % 3 === 0 && i % 5 === 0) {
        divisibleNumbers.push(i);
      }
    }
    
    return divisibleNumbers;
  }
  
  let start = 1;
  let end = 50;
  
  let result = findDivisibleNumbers(start, end);
  
  console.log("Numbers divisible by both 3 and 5 between " + start + " to " + end + ": " + result.join(", "));

// Search Longest Number --- Problem No- 6

var friends = ["rahim", "karim", "abdul", "sadsd", "heroAlom"];

function findLongestName(arr) {
  let longestName = "";

  for (let i = 0; i < arr.length; i++) {
    if (arr[i].length > longestName.length) {
      longestName = arr[i];
    }
  }

  return longestName;
}

let longestName = findLongestName(friends);

console.log("The longest name is: " + longestName);


// Search Unique Number --- Problem No- 7

var numbers2 = [1, 2, 3, 3, 4, 4, 5, 6, 7, 8, 9, 10];

function removeDuplicates(arr) {
  let uniqueNumbers = [];
  
  for (let i = 0; i < arr.length; i++) {
    if (uniqueNumbers.indexOf(arr[i]) === -1) {
      uniqueNumbers.push(arr[i]);
    }
  }
  
  return uniqueNumbers;
}

let uniqueNumbers = removeDuplicates(numbers2);

console.log("Array with unique numbers: ", uniqueNumbers);


// Search Largest Number --- Problem No- 8

var numbers = [1, 2, 3, 3, 4, 4, 5, 6, 7, 8, 9, 10];

function findLargestNumber(arr) {
  let largestNumber = arr[0];
  
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > largestNumber) {
      largestNumber = arr[i];
    }
  }
  
  return largestNumber;
}

let largestNumber = findLargestNumber(numbers);

console.log("The largest number is: " + largestNumber);

// Find Out Shahed Economics History --- Problem No- 9

function monthlySavings(payments, livingCost) {
    if (!Array.isArray(payments) || typeof livingCost !== 'number') {
      return "invalid input";
    }
  
    let totalIncome = 0;
    let totalTax = 0;
  
    for (let payment of payments) {
      if (payment >= 3000) {
        totalTax += payment * 0.20;  
      }
      totalIncome += payment;
    }
  
    let netIncome = totalIncome - totalTax;
  
    let savings = netIncome - livingCost;
  
    if (savings >= 0) {
      return savings;
    } else {
      return "earn more";
    }
  }
  
  console.log(monthlySavings([1000, 2000, 3000], 5400)); 
  console.log(monthlySavings([1000, 2000, 2500], 5000)); 
  console.log(monthlySavings([900, 2700, 3400], 10000)); 
  console.log(monthlySavings("invalid", 1900)); 
  console.log(monthlySavings([100, 1900, 2700, 3400], "invalid")); 
  

  