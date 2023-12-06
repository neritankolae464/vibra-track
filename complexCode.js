/*
 * Filename: complexCode.js
 * Content: Implementation of a complex algorithm for finding prime numbers in a given range.
 */

// Function to check if a number is prime
function isPrime(num) {
    if (num <= 1) return false;

    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
    }
    
    return true;
}

// Function to find prime numbers in a range
function findPrimesInRange(start, end) {
    let primes = [];

    for (let num = start; num <= end; num++) {
        if (isPrime(num)) {
            primes.push(num);
        }
    }

    return primes;
}

// Complex algorithm to find prime numbers in multiple ranges
function findPrimesInMultipleRanges(ranges) {
    let primeRanges = [];
  
    for (let range of ranges) {
        let start = range[0];
        let end = range[1];
        
        let primes = findPrimesInRange(start, end);

        primeRanges.push({
            start: start,
            end: end,
            primes: primes
        });
    }

    return primeRanges;
}

// Main program
console.log("Finding prime numbers in multiple ranges...");

let ranges = [
    [1, 100],
    [101, 200],
    [201, 300],
    [301, 400],
    [401, 500]
];

let primeRanges = findPrimesInMultipleRanges(ranges);

console.log("Prime numbers found in each range:");
for (let range of primeRanges) {
    console.log(`Range ${range.start} - ${range.end}: ${range.primes.join(', ')}`);
}

console.log("Complex code execution completed.");