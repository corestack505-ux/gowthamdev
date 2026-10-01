function login(username, password) {
  if (!username || !password) {
    console.log("Please enter username and password");
    return;
  }

  if (username === "admin" && password === "123456") {
    console.log("Login successful");
  } else {
    console.log("Invalid username or password");
  }
}

login("admin", "123456");
