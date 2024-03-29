// Problem: We need a simple way to look at a user's badge count and JS points
// Solution: Use Node.js to connect to Threehouse's API to get profile information to print out
var profile = require("./profile.js");
var users = process.argv.slice(2);
users.forEach(profile.get);
