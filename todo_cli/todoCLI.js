const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

const menu = '(v) View • (n) New • (cX) Complete • (dX) Delete • (q) Quit\n> ';

console.log('Welcome to Todo CLI!');
console.log('--------------------');

function todoMenu(){
  rl.question(menu, input => {

  })
}

todoMenu();