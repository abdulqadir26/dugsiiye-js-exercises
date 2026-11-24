function calculateArea(width, height = width) {
    return width + height;
}

// Rectangle
console.log("This is Rectangle");
console.log(calculateArea(10, 5));

// Square (height defaults to width)
console.log("This is Square");
console.log(calculateArea(6));