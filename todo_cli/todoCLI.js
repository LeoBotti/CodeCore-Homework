const fs = require("fs");
const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const view = require("./view.js");
const n = require("./new.js");
const complete = require("./complete.js");
// const del = require("./delete.js");

const menu = '(v) View • (n) New • (cX) Complete • (dX) Delete • (q) Quit\n> ';

console.log('Welcome to Todo CLI!');
console.log('--------------------');

const todoMenu = () => {
  rl.question(menu, input => {
    switch (input.slice(0,1).toLowerCase()) {
      case 'v': view(fs, todoMenu);
        break;
      case 'n': n(fs, rl, todoMenu);
        break;
      case 'c': complete(fs, input.slice(1 - input.length), todoMenu);
        break;
      // case 'd': del(input.slice(1 - input.length)); setTimeout(() => todoMenu(), 500
        // break;
      case 'q': console.log('See you soon! 😄'); rl.close();
        break;
      default: console.log('Invalid input. Try again.\n'); todoMenu();
    }
  })
}

todoMenu();