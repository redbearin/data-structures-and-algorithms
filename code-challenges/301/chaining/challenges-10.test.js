
'use strict';

//import { arrayExpression } from "@babel/types";

/* ------------------------------------------------------------------------------------------------
CHALLENGE 1

Write a function named count that, given an integer and an array of arrays, uses either filter, map, or reduce to count the amount of times the integer is present in the array of arrays.

Note: You might need to use the same method more than once.

For example, count(5, [[1, 3, 5, 7, 9], [5, 5, 5], [1, 2, 3]]) returns 4.
------------------------------------------------------------------------------------------------ */

//reference https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/flat  look at section on alternative and reduce and concat

//take an array argument into the input parameter
//go element through element in the array
//use the reduce method to go element by element through the array
//is the element an array?
//if true - send that element through the function and flatten it
//if false - add that element to the accumulator
//at the end you will have an array of elements (all the subarrays have been flatten into elements)

function flattenArray(input) {
  return input.reduce((accumulator, currentElement) => Array.isArray(currentElement) ? accumulator.concat(flattenArray(currentElement)) : accumulator.concat(currentElement), []);
}

//take in a number into the target parameter
//take an array argument into the input parameter
//use the reduce method to go element by element through the array
//is the element identical to target?
//if true - add that element to the filtered array
//if false - return the accumulator
//this method creates a new array that only has elements that match the target
//count the number of elements in this filtered array and return this count



//take in a number into the target parameter
//take in an array into the input parameter
//use the filter method to go element by element through the array
//this method creates a new array that only includes elements that match the target
// count the number of elements in this new array and return this count

const count = (target, input) => {
  let filteredArray = flattenArray(input).filter(element => element === target);
  return filteredArray.length;
};

/*ANOTHER OPTION
const count = (target, input) => {
  let filteredArray = flattenArray.reduce((accumulator, currentElement) => currentElement === 5 ? accumulator.concat(currentElement): accumulator, []);
  return filteredArray.length;
};
*/



/* ------------------------------------------------------------------------------------------------
CHALLENGE 2

Write a function that, given an array of integer arrays as input, calculates the total sum of all the elements in the array.

You may want to use filter, map, or reduce for this problem, but are not required to. You may need to use the same method more than once.

For example, [[1, 2, 3, 4, 5], [6, 7, 2, 4, 5, 7], [9, 2, 3, 6,]] returns 66.
------------------------------------------------------------------------------------------------ */
//take in an array of arrays
//use the reduce method to go element by element through the array
//add the element, which is an array, to the accumulator
//this array returns a flattened array that has all the elements of the subarray as elements of one array
const totalSum = (input) => {
  let flattenedArray = input.reduce((accumulator, currentElement) => accumulator.concat(currentElement), []);

  //take the flat single level array that we created above and use the reduce method to go element by element through this array
  //take the current element of the array and add it to the accumulator
  //return the sum of the all the values of the array
  return flattenedArray.reduce((accumulator, currentElement) => accumulator + currentElement);
};

/* ------------------------------------------------------------------------------------------------
CHALLENGE 3

Write a function named divisibleByFiveTwoToThePower that accepts an array of arrays as input.

This function should first remove any elements that are not numbers or are not divisible by five.

This function should then raise 2 to the power of the resulting numbers, returning an array of arrays.

For example, [ [0,2,5,4], [2,4,10], [a, b] ] should return [ [1, 32], [1024], [] ].
------------------------------------------------------------------------------------------------ */
/*What needs to be done
through element by element and remove all blank elements and all elements that are not divisable by 5 (if or ternary statement)
take 2 and raise it the power in the array
return the values in exactly the format as input

take in an input array that is an array of array
use the forEach method to go through each element of the array
use the filter to return elements of the subarray that can be divided by 5
the resulting filteredArray includes only subarray elements that meet the criteria
use the forEach method on the filteredArray to go through each element
use forEach on each element of the subarray to create a new subarray that is 2 to the power of that element in the subarray
return the new array that is created
*/

const divisibleByFiveTwoToThePower = (input) => {
  let filteredArray = [];
  input.forEach(element =>{
    filteredArray.push(element.filter(currentElement => typeof(currentElement) === 'number' &&currentElement%5 === 0));
  });

  let finalArray = [];
  filteredArray.forEach(element => {
    finalArray.push(element.map(subElement => Math.pow(2, subElement)));
  });
  return finalArray;
};

/* ------------------------------------------------------------------------------------------------
CHALLENGE 4

Write a function named findMaleAndFemale that, given the Star Wars data, below,
returns the names of the characters whose gender is either male or female.

The names should be combined into a single string with each character name separated by "and".

For example, "C-3PO and Luke Skywalker".
------------------------------------------------------------------------------------------------ */

let starWarsData = [{
  name: 'Luke Skywalker',
  height: '172',
  mass: '77',
  hair_color: 'blond',
  skin_color: 'fair',
  eye_color: 'blue',
  birth_year: '19BBY',
  gender: 'male',
},
{
  name: 'C-3PO',
  height: '167',
  mass: '75',
  hair_color: 'n/a',
  skin_color: 'gold',
  eye_color: 'yellow',
  birth_year: '112BBY',
  gender: 'n/a'
},
{
  name: 'R2-D2',
  height: '96',
  mass: '32',
  hair_color: 'n/a',
  skin_color: 'white, blue',
  eye_color: 'red',
  birth_year: '33BBY',
  gender: 'n/a'
},
{
  name: 'Darth Vader',
  height: '202',
  mass: '136',
  hair_color: 'none',
  skin_color: 'white',
  eye_color: 'yellow',
  birth_year: '41.9BBY',
  gender: 'male'
},
{
  name: 'Leia Organa',
  height: '150',
  mass: '49',
  hair_color: 'brown',
  skin_color: 'light',
  eye_color: 'brown',
  birth_year: '19BBY',
  gender: 'female'
}];

/*find the objects where gender: 'female'
return the names of the objects that meet this criteria
convert the array to a string

filter the array of objects
return an filteredArray that only includes the elements that have a gender of 'female'
for each element in the filteredArray return a namesArray of the names
convert the nameArray to a string
use regex to covert the , to ' and ' and return a string in the format requested
*/

let findMaleAndFemale = (data) => {
  let filteredArray = data.filter(element => element.gender === 'female' || element.gender === 'male');
  let namesArray = filteredArray.map(element => element.name);
  console.log(namesArray);
  let stringyArray = namesArray.toString();
  let regex = /,+/g;
  return stringyArray.replace(regex, ' and ');
};

/* ------------------------------------------------------------------------------------------------
CHALLENGE 5

Write a function named findShortest that, given the Star Wars data from Challenge 6, uses any combination of filter, map and reduce to return the name of the shortest character.
------------------------------------------------------------------------------------------------ */

/*filter based on name and return an array of names
go through the returned array and check to see if the we want to keep the name

filter the data array and return a filteredArray that includes the element names
use the reduce method
intialize the accumulator to 100 (picked a number longer than any name)
go through each element(name) in the filtered array
compare the accumulator to the length of the element
if the element is smaller assign that element to the accumulator
otherwise keep the value in the accumulator
at the end the shortest name will be returned
*/

let findShortest = (data) => {
  let shortestChar = data.reduce((accumulator, currentElement) => {
    if (parseInt(currentElement.height) < parseInt(accumulator.height)) {
      accumulator = currentElement;
    }
    return accumulator;
  });
  return shortestChar.name;
};

/*let findShortest = (data) => {
  let filteredArray = data.filter(element => element.name);
  return filteredArray.reduce((accumulator, currentElement) => {
    currentElement.length > accumulator.length? accumulator = currentElement: accumulator;
  }, 100);
};
*/
/* ------------------------------------------------------------------------------------------------
TESTS

All the code below will verify that your functions are working to solve the challenges.

DO NOT CHANGE any of the below code.

Run your tests from the console: jest challenges-10.test.js

------------------------------------------------------------------------------------------------ */

describe('Testing challenge 1', () => {
  test('It should return the number of times the input is in the nested arrays', () => {
    expect(count(5, [[1, 3, 5, 7, 9], [5, 5, 5], [1, 2, 3]])).toStrictEqual(4);
    expect(count(3, [[1, 3, 5, 7, 9], [5, 5, 5], [1, 2, 3]])).toStrictEqual(2);
    expect(count(12, [[1, 3, 5, 7, 9], [5, 5, 5], [1, 2, 3]])).toStrictEqual(0);
  });
  test('It should work on empty arrays', () => {
    expect(count(5, [[1, 3, 5, 7, 9], [], [5, 5, 5], [1, 2, 3], []])).toStrictEqual(4);
    expect(count(5, [])).toStrictEqual(0);
  });
});

describe('Testing challenge 2', () => {
  test('It should add all the numbers in the arrays', () => {
    const nums = [[1, 2, 3, 4, 5], [6, 7, 2, 4, 5, 7], [9, 2, 3, 6,]];

    expect(totalSum(nums)).toStrictEqual(66);
  });
});

describe('Testing challenge 3', () => {
  test('It should return numbers divisible by five, then raise two to the power of the resulting numbers', () => {
    expect(divisibleByFiveTwoToThePower([[10, 20, 5, 4], [5, 6, 7, 9], [1, 10, 3]])).toStrictEqual([[1024, 1048576, 32], [32], [1024]]);
  });

  test('It should return an empty array if none of the numbers are divisible by five', () => {
    expect(divisibleByFiveTwoToThePower([[1, 2, 3], [5, 10, 15]])).toStrictEqual([[], [32, 1024, 32768]]);
  });

  test('It should return an empty array if the values are not numbers', () => {
    expect(divisibleByFiveTwoToThePower([['one', 'two', 'five'], ['5', '10', '15'], [5]])).toStrictEqual([[], [], [32]]);
  });
});

describe('Testing challenge 4', () => {
  test('It should return only characters that are male or female', () => {
    expect(findMaleAndFemale(starWarsData)).toStrictEqual('Luke Skywalker and Darth Vader and Leia Organa');
    expect(findMaleAndFemale([{ name: 'person', gender: 'female' }, { gender: 'lol' }, { name: 'persontwo', gender: 'male' }])).toStrictEqual('person and persontwo');
  });
});

describe('Testing challenge 5', () => {
  test('It should return the name of the shortest character', () => {
    expect(findShortest(starWarsData)).toStrictEqual('R2-D2');
  });
});
