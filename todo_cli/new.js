const fs = require("fs");

const n = (rl, fn) => {
  rl.question('What?\n> ', input => {
    if(!input){
      console.log('Input cannot be empty. Try again.'); n();
    } else {
      fs.readFile("./todo.csv", "utf8", (err, content) => {
        const index = content.split("\n").length;
        if (err) throw err;
        if(content){
          fs.appendFile("todo.csv", `\n${index} [ ] ${input}`, err => {
            if (err) throw err;
          });
        } else {
          fs.appendFile("todo.csv", `${index} [ ] ${input}`, err => {
            if (err) throw err;
          });
        }
      });
    }
    fn();
  })
}

module.exports = n;