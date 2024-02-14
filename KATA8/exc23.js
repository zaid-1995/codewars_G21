// Class inheritance

class User {
  constructor(username, email, password) {
    this.username = username;
    this.email = email;
    this.password = password;
  }

  register() {
    console.log(`${this.username} is now registered successfully.`);
  }
}

class Member extends User {
  constructor(username, email, password) {
    super(username, email, password);
  }
}

let member = new Member("Zaid");
member.register();