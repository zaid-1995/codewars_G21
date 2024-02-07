let user = {
  name: "Zaid",
  surname: "Jabborov",
  age: 30,
  child: {
    name: "Ali",
    age: 20,
    child: {
      name: "Muhammad",
      age: 10,
    }
  }
};

let sum = 0;

let getAge = (object) => {
  sum += object.age;

  if (object.child) {
    getAge(object.child)
  }
};

getAge(user);
console.log(sum);
