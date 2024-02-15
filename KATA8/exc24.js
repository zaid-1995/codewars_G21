try {
  let test = add(10, 11);
} catch (error) {
  // console.log(error)
  // console.log(error.stack)
  console.log(error.name);
  // console.log(error.message)
}

let users = {
  username: "zaid95",
  password: "19950608",
};

let facebook = (pw, usn, callback) => {
  setTimeout(() => {
    if (users.password === pw && users.username === usn) {
      callback("Welcome to your Facebook page.");
    } else {
      callback("username or password is wrong.");
    }
  }, 2000);
};

let user = facebook("19950608", "zaid95", (data) => {
  console.log(data);
});
