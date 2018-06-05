const args = process.argv.slice(2);

function drawLine(num){
    let line = "";
    while(num>0){
        line += '━';
        num -= 1;
    }
    return str;
}

function drawTopBorder(num){
    return("┏" + drawLine(num) + "┓");
}

function drawMiddleBorder(num){
    return('┣' + drawLine(num) + '┫');
}

function drawBottomBorder(num){
    return('┗' + drawLine(num) + '┛');
}

function drawBarsAround(str){
    return('┃' + str + '┃');
}

function boxIt(arr){
    
}