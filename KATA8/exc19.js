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

// getAge(user);
// console.log(sum);

let person = {
  firstName: "Zaid",
  lastName: "Jabborov",

  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  },

  set fullName(value) {
    let values = value.split(" ");
    this.firstName = values[0];
    this.lastName = values[1];
  },
};
person.fullName = "Muhammad Ali";
console.log(person.fullName);
