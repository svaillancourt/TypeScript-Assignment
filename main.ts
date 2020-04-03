// Question 1
// Area of a Triangle

// Write a function that takes the base and height of a triangle and return its area.
// Link: https://edabit.com/challenge/3CaszbdZYGN4otQD8

// Examples
// triArea(3, 2) ➞ 3

// triArea(7, 4) ➞ 14

// triArea(10, 10) ➞ 50
// Notes
// The area of a triangle is: (base * height) / 2
// Don't forget to return the result.

function triArea(base : number, height : number) {
	return (base * height) / 2;
}

console.log(triArea(8,8));
console.log(triArea(10,3));
console.log(triArea(50,10));

// Question 2

// link: https://edabit.com/challenge/QaApgtePE6QrCZ64o

// Return the First Element in an Array
// Create a function that takes an array and returns the first element.

// Examples
// getFirstValue([1, 2, 3]) ➞ 1

// getFirstValue([80, 5, 100]) ➞ 80

// getFirstValue([-500, 0, 50]) ➞ -500

// function getFirstValue(arr:number): number{
// 	return arr;
// }

let listOfNumbers: number[];
listOfNumbers = [80, 5, 100];

console.log(listOfNumbers); // it will show the array

console.log(listOfNumbers[0]); // Index 0 
console.log(listOfNumbers[1]); // index 1
console.log(listOfNumbers[2]); // index 2

