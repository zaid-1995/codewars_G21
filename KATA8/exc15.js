// let set = new Set([1, 2, 3, 3, 4, 5]);

// set.add("oops");
// set.delete(1);
// set.clear();
// let includes = set.has(3);
// let checkSize = set.size;

// console.log(set);

let students = new Set();

students.add("Zaid")
        .add("Ali")
        .add("Muhammad");

// Looping method 1
for (let elements of students) {
  console.log(elements);
}

// Looping method 2
students.forEach(function (elements) {
  console.log(elements);
});

// Looping method 3
let studentsArray = Array.from(students);

for (let i = 0; i < studentsArray.length; i++) {
  console.log(studentsArray[i]);
}
