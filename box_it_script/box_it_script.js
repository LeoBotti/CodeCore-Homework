const args = process.argv.slice(2);
const x = args[0];

function drawLine(num){
    let str = "";
    while(num>0){
        str += '━';
        num -= 1;
    }
    return str;
}

