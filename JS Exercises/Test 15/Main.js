console.log("This is for in loop ===============");
const person = {
    name: "Maryam",
    age: 27,
    city: "Mogadishu",
    Gender: "Female" 

};
const person1 = {
    name: "Ramlo",
    age: 17,
    city: "Jowhar",
    Gender: "Female" 
};

const person2 = {
    name: "Hurni",
    age: 23,
    city: "Boosaso",
    Gender: "Male" 

};
// First person
for (let key in person) {
    console.log(key, ":", person[key]);
    
}
console.log("- - - - - - - - -  -");
// Second person
for (let key in person1) {
    console.log(key, ":", person1[key]);
}
console.log("- - - - - - - - -  -");
// Third person
for (let key in person2) {
    console.log(key, ":", person2[key]);
}

console.log("This is for of loop ===============");

const per = {
    name: "Maryam",
    age: 27,
    city: "Mogadishu",
    Gender: "Female"
};

const per1 = {
    name: "Ramlo",
    age: 17,
    city: "Jowhar",
    Gender: "Female"
};

const per2 = {
    name: "Hurni",
    age: 23,
    city: "Boosaso",
    Gender: "Male"
};

// First person
for (let [key, value] of Object.entries(person)) {
    console.log(key, ":", value);
}

console.log("- - - - - - - - - -");

// Second person
for (let [key, value] of Object.entries(person1)) {
    console.log(key, ":", value);
}

console.log("- - - - - - - - - -");

// Third person
for (let [key, value] of Object.entries(person2)) {
    console.log(key, ":", value);
}