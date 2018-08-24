const del = (fs, num, fn) => {
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
        todo.splice(x, 1);

        for(let i = x; i < todo.length; i++){
          let temp = todo[i].split(" [");
          temp.shift();
          temp.unshift(`${i} [`);
          todo[i] = temp.join("");
        }
  
        fs.writeFile("todo.csv", todo.join("\n"), err => {
          if (err) throw err;
          console.log(`\nDeleted "${task.split("] ")[1]}"\n`);
          fn();
        });
      }
    })
  }
}

module.exports = del;