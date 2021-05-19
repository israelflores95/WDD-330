'use strict'; //turn on strict mode

//throwing exceptions

//throw 2;
//throw 'up';

// let testArray = {something: 123, somethingElse: 456} 
// throw testArray;

function squareRoot(number) { //create a function to squareroot a number
    'use strict';
    if (number < 0) {
        throw new RangeError('You can\'t find the square root of negative numbers')
    }
    return Math.sqrt(number);
};

console.log(squareRoot(5)); //testing the function
console.log(squareRoot(85)); //testing the function with negative number

//eloquent javascript chp8

function primitiveMultiply(a, b) {
    if (Math.random() < 0.2) {
      return a * b;
    } else {
      throw new MultiplicatorUnitFailure("Klunk");
    }
  }
  
  function reliableMultiply(a, b) {
    for (let i = 1; i === 1;) {
      try {
        return primitiveMultiply(a, b);
      } catch (e) {
  
      }
      
    }
  }
  
  console.log(reliableMultiply(8, 8));
  // → 64