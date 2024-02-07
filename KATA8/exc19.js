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

let getAge = (obj) => {
  sum += obj.age;

  if (obj.child) {
    getAge(obj.child)
  }
};

getAge(user);
console.log(sum);
