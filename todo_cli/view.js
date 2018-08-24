const view = (fs, fn) => {
  fs.readFile("./todo.csv", "utf8", (err, content) => {
    if (err) throw err;
    content ? console.log(`\n${content}\n`) : console.log("\nList is empty...\n")
    fn();
  });
}

module.exports = view;