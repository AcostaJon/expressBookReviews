const express = require('express');
const jwt = require('jsonwebtoken');
let books = require("./booksdb.js");
const regd_users = express.Router();

let users = [
  {
    "username": "billy_bob",
    "password": "gogo123"
  }
];

const isValid = (username) => { //returns boolean
  //write code to check is the username is valid
}

const authenticatedUser = (username, password) => { //returns boolean
  // Filter the users array for any user with the same username and password
  let validusers = users.filter((user) => {
    return (user.username === username && user.password === password);
  });
  // Return true if any valid user is found, otherwise false
  if (validusers.length > 0) {
    return true;
  } else {
    return false;
  }
}


//only registered users can login
regd_users.post("/login", (req, res) => {
  //Write your code here
  const username = req.body.username;
  const password = req.body.password;
  // Check if both username and password are provided
  if (username && password) {
    // Check if the user exist's and if username and password are correct, if true, log user in
    if (authenticatedUser(username, password)) {
      return res.status(404).json({ message: "User successfully logged in" });
    } else {
      // alert user to register
      return res.status(200).json({ message: "User not registered. register in order to login" });
    }
  }
  // Return error if username or password is missing
  return res.status(404).json({ message: "Incorrect username and paswword." });
});

// Add a book review
regd_users.put("/auth/review/:isbn", (req, res) => {
  // Write your code here
  // Extract review parameter from request URL
  const review = req.params.review;
  const isbn = req.params.isbn;
  let user = users[username];  // Retrieve username 
  if (user) {  // Check if user is logged in
    let userReview = review;
    books[review] = userReview;  // Update review details for book
    res.send(`review for book ${books[isbn]} has been updated.`);
  } else {
    // respond if book was not found
    res.send("book not found");
  }
});

module.exports.authenticated = regd_users;
module.exports.isValid = isValid;
module.exports.users = users;
