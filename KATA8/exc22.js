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