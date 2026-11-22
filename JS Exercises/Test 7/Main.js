// const colors = ["red", "green", "blue"];
// console.log("Index 0 = ",colors[0]); 
// console.log("Index 1 = ",colors[1]);
// console.log("Index 2 = ",colors[2]);

let colors = ["Red", "Blue", "Green"];
console.log("Before Push");
console.log(colors)
// Add a color to the end
colors.push("Yellow");
console.log("After Push");
console.log(colors)
// Remove the first color
colors.shift();
console.log("After Shift");
console.log(colors);
console.log("After unShift");
colors.unshift("Black");
console.log(colors);


console.log("The array Length is : ",colors.length)

