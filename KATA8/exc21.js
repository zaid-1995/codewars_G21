// Destructure in Array 

let arr = ["Zaid", "Murod", "Ali"];

let [name1, name2, name3] = arr;

console.log(name1);
console.log(name2);
console.log(name3);

// Array destructure 100% project based example

let users = [
  { id: 1, name: "Zaid", occupation: "Developer" },
  { id: 2, name: "Ali", occupation: "Student" },
  { id: 3, name: "Murod", occupation: "Teacher" },
  { id: 4, name: "Muhammad", occupation: "CEO" },
];

users.map(({id, name, occupation}) => {
    console.log(id);
    console.log(name);
    console.log(occupation);
});
