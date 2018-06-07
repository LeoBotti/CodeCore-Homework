const args = process.argv.slice(2);

function drawLine(num){
    let line = "";
    while(num>0){
        line += '━';
        num -= 1;
    }
    return line;
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

function findLong(arr){
    let long = arr[0];
    for(let str of arr){
        if(long.length < str.length){
            long = str;
        }
    }
    return long.length;
}

function rightSpace(str, n){
    return str + ' '.repeat(n - str.length);
}

function addBars(str, n){
    if(str.length === n){
        return drawBarsAround(str);
    } else {
        return drawBarsAround(rightSpace(str, n))
    }
}

function boxIt(arr){
   if(arr[0] == undefined){
       console.log(("┏" + "┓\n" + '┗' + '┛'));
   } else {
       const long = findLong(arr);
       console.log(drawTopBorder(long));

       for(let i = 0; i < arr.length; i++){
           if(i !== arr.length -1){
               console.log(addBars(arr[i], long));
               console.log(drawMiddleBorder(long));
           } else {
            console.log(addBars(arr[i], long));
           }
       }

       console.log(drawBottomBorder(long));
    }
}

boxIt(args);