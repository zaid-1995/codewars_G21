// Class inheritance

class User {
  constructor(username, email, password) {
    this.username = username;
    this.email = email;
    this.password = password;
  }

  register() {
    console.log(`${this.username} is now registered to the ${this.membership} membership successfully.`);
  }
}

class Member extends User {
  constructor(username, email, password, membership) {
    super(username, email, password);
    this.membership = membership;   
  }
}

let member = new Member('Zaid', 'whitepanda.net@gmail.com', 'jz12345', 'Premium');
member.register();