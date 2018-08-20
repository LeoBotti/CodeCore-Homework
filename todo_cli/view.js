const fs = require("fs");

const view = () => {
  fs.readFile("./todo.csv", "utf8", (err, content) => {
    if (err) throw err;
    content ? console.log(`${content}\n`) : console.log("List is empty...\n")
  });
}


module.exports = view;