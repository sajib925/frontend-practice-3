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