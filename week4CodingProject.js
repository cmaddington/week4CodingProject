//1. Create an array called ages that contains the following values: 3, 9, 23, 64, 2, 8, 28, 93.
//1a. Programmatically subtract the value of the first element in the array from the value in the last element of the array.
let ages = [3, 9, 23, 64, 2, 8, 28, 93];
console.log(ages[ages.length-1] - ages [0]);

//1b. Add a new age to your array and repeat the step above to ensure it is dynamic.
ages.push(25);
console.log(ages[ages.length-1] - ages[0]);

//1c. Use a loop to iterate through the array and calculate the average age.
let sum = 0;
for (i = 0; i < ages.length; i++) {
    sum += ages[i];
};
console.log(sum / ages.length);

//2.Create an array called names that contains the following values: 'Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob'.
const names = ["Sam", "Tommy", "Tim", "Sally", "Buck", "Bob"];

//2a. Use a loop to iterate through the array and calculate the average number of letters per name.
total = 0;
for (i = 0; i < names.length; i++) {
    total = total + names[i].length;
};
console.log(total / names.length);

//2b. Use a loop to iterate through the array again and concatenate all the names together, separated by spaces.
let con = "";
for (let i = 0; i < names.length; i++) {
    con = con.concat(" ", names[i]);
}
console.log(con);

//3. How do you access the last element of any array?


//4. How do you access the first element of any array?



//5. Create a new array called nameLengths. Write a loop to iterate over the previously created names array and add the length of each name to the nameLengths array.
let nameLengths = [];
for (let i = 0; i <names.length; i++) {
    nameLengths.push(names[i].length);
}
console.log(nameLengths);

//6. Write a loop to iterate over the nameLengths array and calculate the sum of all the elements in the array.
let lenSum = 0;
for (let i = 0; i < nameLengths.length; i++) {
    lenSum = lenSum + nameLengths[i];
}
console.log(lenSum);

//7. Write a function that takes two parameters, word and n, as arguments and returns the word concatenated to itself n number of times. (i.e. if I pass in 'Hello' and 3, I would expect the function to return 'HelloHelloHello').
function conWord(word, n) {
    let concatenated = "";
    for (let i = 0; i < n; i++) {
        concatenated = concatenated + word;
    }
    return concatenated;
}

const result = conWord;
console.log(result);

//8.Write a function that takes two parameters, firstName and lastName, and returns a full name. The full name should be the first and the last name separated by a space.
function fullName (firstName, lastName) {
    return(firstName + " " + lastName);
}
console.log(fullName)

//9. Write a function that takes an array of numbers and returns true if the sum of all the numbers in the array is greater than 100.
function hundred(array) {
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
        sum = sum + array[i];
    }
    if (sum > 100) {

    }
    else {
        return false;
    }
}
console.log(hundred(array));

//10. Write a function that takes an array of numbers and returns the average of all the elements in the array.
function calculateAverage(numbers) {
    if (numbers.length === 0) {
        return 0;
    }
    const total = numbers.reduce((sum, num) => sum + num, 0);
    const average = total / numbers.length;
    return average;
}

//11. Write a function that takes two arrays of numbers and returns true if the average of the elements in the first array is greater than the average of the elements in the second array.
function compareAverage(arr1, arr2) {
    if (arr1.length === 0 || arr2.length === 0) {
        throw new Error("Input arrays must not be empty");
    }

    const average1 = arr1.reduce((sum, num) => sum + num, 0) / arr1.length;
    const average2 = arr2.reduce((sum, num) => sum + num, 0) / arr2.length;

    return average1 > average2;
}

//12. Write a function called willBuyDrink that takes a boolean isHotOutside, and a number moneyInPocket, and returns true if it is hot outside and if moneyInPocket is greater than 10.50.
function willBuyDrink(isHotOutside, moneyInPocket) {
    return isHotOutside && moneyInPocket > 10.50;
}
console.log(willBuyDrink)

//13. Create a function of your own that solves a problem. In comments, write what the function does and why you created it.
function isEven(number) {
    /**
     * Checks if a given number is even.
     *
     * param {number} number - The number to be checked.
     * returns {boolean} True if the number is even, False if it's odd.
     */
    return number % 2 === 0;
}

console.log(isEven)