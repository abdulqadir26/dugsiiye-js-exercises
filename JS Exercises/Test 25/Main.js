//1. Spread Operator
const array1 = [1, 2, 3];
const array2 = [4, 5, 6];

const combinedArray = [...array1, ...array2];

console.log(combinedArray);

console.log("- - - - -  - - - - - - - -");

//2. Rest Parameter
function multiply(...numbers) {
    return numbers.reduce((total, number) => total * number, 1);
}

console.log(multiply(2, 3));
console.log(multiply(2, 3, 4));
console.log(multiply(1, 2, 3, 4, 5));