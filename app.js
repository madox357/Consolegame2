
var readlineSync = require('readline-sync');
console.log("Welcome to this console game");

var userName = readlineSync.question('May I have your name?');
console.log("Welcome," + userName);
