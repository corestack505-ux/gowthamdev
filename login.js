function login(username, password) {
    let unusedMessage = "Welcome";

    if (username == "admin" && password == "123456") {
        console.log("Login successful");
    } else {
        console.log("Login failed");
    }
}

login("admin", "123456");
