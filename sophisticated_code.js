/* 
   Filename: sophisticated_code.js
   Description: This code demonstrates a complex and sophisticated JavaScript program that performs various calculations and manipulations on arrays of data.
*/

// Define an array of numbers
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Function to calculate the sum of the numbers in the array
function calculateSum() {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }
  return sum;
}

// Calculate the sum of the numbers
const sum = calculateSum();
console.log("Sum:", sum);

// Function to calculate the average of the numbers in the array
function calculateAverage() {
  return calculateSum() / numbers.length;
}

// Calculate the average of the numbers
const average = calculateAverage();
console.log("Average:", average);

// Function to find the maximum number in the array
function findMax() {
  let max = numbers[0];
  for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] > max) {
      max = numbers[i];
    }
  }
  return max;
}

// Find the maximum number in the array
const max = findMax();
console.log("Max:", max);

// Function to find the minimum number in the array
function findMin() {
  let min = numbers[0];
  for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] < min) {
      min = numbers[i];
    }
  }
  return min;
}

// Find the minimum number in the array
const min = findMin();
console.log("Min:", min);

// Function to double each number in the array
function doubleNumbers() {
  const doubled = [];
  for (let i = 0; i < numbers.length; i++) {
    doubled.push(numbers[i] * 2);
  }
  return doubled;
}

// Double each number in the array
const doubledNumbers = doubleNumbers();
console.log("Doubled:", doubledNumbers);

// Function to square each number in the array
function squareNumbers() {
  const squared = [];
  for (let i = 0; i < numbers.length; i++) {
    squared.push(numbers[i] ** 2);
  }
  return squared;
}

// Square each number in the array
const squaredNumbers = squareNumbers();
console.log("Squared:", squaredNumbers);

// Function to filter the even numbers from the array
function filterEvenNumbers() {
  const evenNumbers = numbers.filter((number) => number % 2 === 0);
  return evenNumbers;
}

// Filter the even numbers from the array
const evenNumbers = filterEvenNumbers();
console.log("Even Numbers:", evenNumbers);

// Function to sort the numbers in ascending order
function sortAscending() {
  return numbers.sort((a, b) => a - b);
}

// Sort the numbers in ascending order
const ascendingNumbers = sortAscending();
console.log("Ascending Order:", ascendingNumbers);

// Function to sort the numbers in descending order
function sortDescending() {
  return numbers.sort((a, b) => b - a);
}

// Sort the numbers in descending order
const descendingNumbers = sortDescending();
console.log("Descending Order:", descendingNumbers);

// Function to reverse the array of numbers
function reverseNumbers() {
  return numbers.reverse();
}

// Reverse the array of numbers
const reversedNumbers = reverseNumbers();
console.log("Reversed:", reversedNumbers);

// Function to calculate the factorial of a number
function calculateFactorial(n) {
  let factorial = 1;
  for (let i = 1; i <= n; i++) {
    factorial *= i;
  }
  return factorial;
}

// Calculate the factorial of 5
const factorial = calculateFactorial(5);
console.log("Factorial of 5:", factorial);

// Function to calculate the Fibonacci sequence up to a given limit
function calculateFibonacci(limit) {
  const fibonacci = [0, 1];
  for (let i = 2; i < limit; i++) {
    fibonacci.push(fibonacci[i - 1] + fibonacci[i - 2]);
  }
  return fibonacci;
}

// Calculate the Fibonacci sequence up to 10 numbers
const fibonacciSequence = calculateFibonacci(10);
console.log("Fibonacci Sequence:", fibonacciSequence);

// Function to check if a number is prime
function isPrimeNumber(number) {
  if (number < 2) {
    return false;
  }

  for (let i = 2; i < number; i++) {
    if (number % i === 0) {
      return false;
    }
  }

  return true;
}

// Check if 13 is a prime number
const isPrime = isPrimeNumber(13);
console.log("Is 13 prime?", isPrime);

// Function to find all prime numbers within a range
function findPrimesInRange(start, end) {
  const primes = [];
  for (let number = start; number <= end; number++) {
    if (isPrimeNumber(number)) {
      primes.push(number);
    }
  }
  return primes;
}

// Find all prime numbers between 1 and 100
const primeNumbers = findPrimesInRange(1, 100);
console.log("Prime Numbers (1-100):", primeNumbers);

// ... Implement more complex and creative JavaScript code here ...
// ...(additional calculations, algorithms, data manipulations, etc.)...

// End of sophisticated_code.js