// Write a JavaScript function that takes a number as a parameter and throws a custom 'Error' if the number is not an integer

// function checkInteger(number) {
//     if (!Number.isInteger(number)) {
//       throw new Error('The provided value is not an integer.');
//     }
//     console.log('The provided value is an integer.');
//   }
  
//   // Example usage:
//   try {
//     checkInteger(4); // The provided value is an integer.
//     checkInteger(4.5); // Throws an error
//   } catch (error) {
//     console.error(error.message);
//   }



// Write a JavaScript function that accepts two numbers as parameters and throws a custom 'Error' if the second number is zero.


function divideNumbers(dividend, divisor) {
    if (divisor === 0) {
      throw new Error('Division by zero is not allowed.');
    }
    return dividend / divisor;
  }
  
  // Example usage:
  try {
    console.log(divideNumbers(10, 2)); // Outputs: 5
    console.log(divideNumbers(10, 0)); // Throws an error
  } catch (error) {
    console.error(error.message);
  }
  

//   Write a JavaScript function that takes a number as a parameter and throws a custom 'Error' if the number is negative.
function checkPositiveNumber(number) {
    if (number < 0) {
      throw new Error('Negative numbers are not allowed.');
    }
    console.log('The provided number is non-negative.');
  }
  
  // Example usage:
  try {
    checkPositiveNumber(5);  // The provided number is non-negative.
    checkPositiveNumber(-3); // Throws an error
  } catch (error) {
    console.error(error.message);
  }

  
//   Write a JavaScript function that takes an array as a parameter and throws a custom 'Error' if the array is empty.

function checkArrayNotEmpty(array) {
    if (array.length === 0) {
      throw new Error('The array is empty.');
    }
    console.log('The array is not empty.');
  }
  
  // Example usage:
  try {
    checkArrayNotEmpty([1, 2, 3]);  // The array is not empty.
    checkArrayNotEmpty([]);         // Throws an error
  } catch (error) {
    console.error(error.message);
  }

  

//   Write a JavaScript function that takes a string as a parameter and throws a custom 'Error' if the string is empty.


  function checkStringNotEmpty(str) {
    if (str.trim() === '') {
      throw new Error('The string is empty.');
    }
    console.log('The string is not empty.');
  }
  
  // Example usage:
  try {
    checkStringNotEmpty('Hello');  // The string is not empty.
    checkStringNotEmpty('');       // Throws an error
  } catch (error) {
    console.error(error.message);
  }
//   Write a JavaScript program that shows the use of multiple catch blocks to handle different types of errors separately.