let students = new Map();

students.set("name1", "Zaid");
students.set("name2", "Ali");
students.set("name3", "Muhammad");

// forEach() with new Map()
students.forEach((value, key, map) => {
    console.log(value);
    console.log(key);
    console.log(map);
});

// LOOP METHOD for-of with new Map()
for(let entries of students){
    console.log(entries);
}

console.log(students);
console.log(students.get("name2"));
console.log(students.size);
console.log(students.keys());
console.log(students.values());
console.log(students.entries());

students.delete("name2");
console.log(students);
