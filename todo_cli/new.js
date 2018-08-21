const fs = require("fs");
const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const n = () => {
  rl.question('What?', input => {
    if(!input){
      console.log('Input cannot be empty. Try again.'); n();
    } else {
      fs.appendFile("todo.csv", input, err => {
        if (err) throw err;
      });
    }
  })
}

module.exports = n;