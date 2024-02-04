let student = new Map();

student.set('name1', 'Zaid');
student.set('name2', 'Ali');
student.set('name3', 'Muhammad');

console.log(student);
console.log(student.get('name2'));
console.log(student.size);
console.log(student.keys());
console.log(student.values());
console.log(student.entries());

student.delete('name2')
console.log(student);

