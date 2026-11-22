// 1. Function Basics 
function add(a, b) {
    // console.log('Total is $', a + b);
    return a + b;
}

// Function calls

// add(10, 20);
// add(5, 15);
// add(100, 50);
console.log(add('Total is $', 10, 20));
console.log(add('Total is $', 5, 15));
console.log(add('Total is $', 100, 50));

console.log("- - - - - - - - -  - - - -  - -");

//2. Function Expressions

const add1 = function(a, b) {
    return a + b;
};

// Function calls
console.log(add1("This is the Totaal ", 10, 20));
console.log(add1("This is the Totaal ", 7, 8));
console.log(add1("This is the Totaal ", 50, 25));