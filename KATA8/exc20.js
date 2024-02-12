// Destucture in Nested Object

let obj = {
  name: "Zaid",
  occupation: "Developer",
  age: 28,

  friend: {
    ismi: "Murod",
    kasbi: "Student",
    yoshi: 27,
  },
};

let {name, occupation, age,  friend: {ismi, kasbi, yoshi} } = obj;

console.log(name);
console.log(occupation);
console.log(age);
console.log(ismi);
console.log(kasbi);
console.log(yoshi);