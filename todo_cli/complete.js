const complete = (fs, num, fn) => {
  const x = +num;
  if(!Number.isInteger(+x)){
    console.log("\nMust enter list number in command to specify the item...\n");
    fn();
  } else {
    fs.readFile("./todo.csv", "utf8", (err, content) => {
      if(err) throw err;
      const todo = content.split("\n");

      if(todo.length <= x || x < 0){
        console.log(`\nItem ${x} does not exits...\n`);
        fn();
      } else {
        const task = todo[x];
        todo[x] = task.replace("[ ]", "[✓]");
  
        fs.writeFile("todo.csv", todo.join("\n"), err => {
          if (err) throw err;
          console.log(`\nCompleted "${task.split("] ")[1]}"\n`);
          fn();
        });
      }
    })
  }
}

module.exports = complete;