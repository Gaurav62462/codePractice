export const problems  = [
    {
      id: 1,
      title: "Sum of Two Numbers",
      description: "Write a function that returns the sum of two numbers.",
      initialCode: `function sum(a, b) {
        // Your code here
      }`,
      testCases: [
        { input: [1, 2], output: 3 },
        { input: [0, 0], output: 0 },
        { input: [-1, 1], output: 0 },
        { input: [100, 200], output: 300 },
        { input: [1.5, 2.5], output: 4 }
      ]
    },
    {
      id: 2,
      title: "Factorial",
      description: "Write a function that returns the factorial of a given number.",
      initialCode: `function factorial(n) {
        // Your code here
      }`,
      testCases: [
        { input: [0], output: 1 },
        { input: [1], output: 1 },
        { input: [5], output: 120 },
        { input: [7], output: 5040 },
        { input: [10], output: 3628800 }
      ]
    },
    {
      id: 3,
      title: "Palindrome Check",
      description: "Write a function that checks if a given string is a palindrome.",
      initialCode: `function isPalindrome(s) {
        // Your code here
      }`,
      testCases: [
        { input: ["racecar"], output: true },
        { input: ["hello"], output: false },
        { input: ["madam"], output: true },
        { input: ["12321"], output: true },
        { input: ["12345"], output: false }
      ]
    },
    {
      id: 4,
      title: "Fibonacci Sequence",
      description: "Write a function that returns the nth Fibonacci number.",
      initialCode: `function fibonacci(n) {
        // Your code here
      }`,
      testCases: [
        { input: [0], output: 0 },
        { input: [1], output: 1 },
        { input: [5], output: 5 },
        { input: [10], output: 55 },
        { input: [15], output: 610 }
      ]
    },
    {
      id: 5,
      title: "Find Maximum",
      description: "Write a function that returns the maximum number in an array.",
      initialCode: `function findMax(arr) {
        // Your code here
      }`,
      testCases: [
        { input: [[1, 2, 3, 4, 5]], output: 5 },
        { input: [[-1, -2, -3, -4, -5]], output: -1 },
        { input: [[0, 0, 0, 0]], output: 0 },
        { input: [[100, 200, 300]], output: 300 },
        { input: [[1]], output: 1 }
      ]
    },
    {
      id: 6,
      title: "Reverse String",
      description: "Write a function that reverses a given string.",
      initialCode: `function reverseString(s) {
        // Your code here
      }`,
      testCases: [
        { input: ["hello"], output: "olleh" },
        { input: ["world"], output: "dlrow" },
        { input: ["!12345"], output: "54321!" },
        { input: ["racecar"], output: "racecar" },
        { input: ["123"], output: "321" }
      ]
    },
    {
      id: 7,
      title: "Count Vowels",
      description: "Write a function that counts the number of vowels in a string.",
      initialCode: `function countVowels(s) {
        // Your code here
      }`,
      testCases: [
        { input: ["hello"], output: 2 },
        { input: ["world"], output: 1 },
        { input: ["aeiou"], output: 5 },
        { input: ["xyz"], output: 0 },
        { input: ["AEIOU"], output: 5 }
      ]
    },
    {
      id: 8,
      title: "Merge Arrays",
      description: "Write a function that merges two sorted arrays into one sorted array.",
      initialCode: `function mergeArrays(arr1, arr2) {
        // Your code here
      }`,
      testCases: [
        { input: [[1, 3, 5], [2, 4, 6]], output: [1, 2, 3, 4, 5, 6] },
        { input: [[1, 2, 3], [4, 5, 6]], output: [1, 2, 3, 4, 5, 6] },
        { input: [[1, 1, 1], [2, 2, 2]], output: [1, 1, 1, 2, 2, 2] },
        { input: [[-1, 0, 1], [-2, 0, 2]], output: [-2, -1, 0, 0, 1, 2] },
        { input: [[], [1, 2, 3]], output: [1, 2, 3] }
      ]
    },
    {
      id: 9,
      title: "Prime Check",
      description: "Write a function that checks if a number is a prime.",
      initialCode: `function isPrime(n) {
        // Your code here
      }`,
      testCases: [
        { input: [2], output: true },
        { input: [4], output: false },
        { input: [17], output: true },
        { input: [20], output: false },
        { input: [23], output: true }
      ]
    },
    {
      id: 10,
      title: "Array Sum",
      description: "Write a function that returns the sum of all numbers in an array.",
      initialCode: `function arraySum(arr) {
        // Your code here
      }`,
      testCases: [
        { input: [[1, 2, 3, 4, 5]], output: 15 },
        { input: [[0, 0, 0, 0, 0]], output: 0 },
        { input: [[-1, -2, -3]], output: -6 },
        { input: [[100, 200, 300]], output: 600 },
        { input: [[1]], output: 1 }
      ]
    }
  ];