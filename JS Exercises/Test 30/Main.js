// function great(name) {
//     console.log("Hello! Mr/Mss ", name)
// }

// function ProcessUserInput(callBack) {
//     const name = prompt("Enter Your Name")
//     callBack(name);
// }
// ProcessUserInput(great);


function operate(a,b, callBack) {
    return callBack(a,b); 
}
function Add(a,b) {
    return a+b;
}
function Subtract(a,b) {
    return a-b;
}
function Multibly(a,b) {
    return a*b;
    
}
function divide(a,b) {
    return a/b;
    
}
function Fullname(a,b) {
    return a + b; //Alaabtaan ineey shaqeyneesaa fiirinaayay
    
}
console.log("Addition : ", operate(2,3,Add));
console.log("Subtract : ",operate(5,2, Subtract));
console.log("Multiblication is : ",operate(5,2, Multibly));
console.log("divition is ", operate(10,2,divide));
console.log("Thank you mr ", operate(`Abdulkadir`,` Ahmed`,Fullname)); // Bashaal caadi ah waaye hhhhkhkhkhkhkhkkhhkhkhk
