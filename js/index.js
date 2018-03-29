const a = parseInt(prompt('Enter "a" coefficient, do not forget about minus, if it is there!, if there is no number just Enter 1'));
const b = parseInt(prompt('Enter "b" coefficient, do not forget about minus, if it is there!, if there is no number just Enter 1'));
const c = parseInt(prompt('Enter "c" coefficient, do not forget about minus, if it is there!'));

const result = solveQuadr(a, b, c);
document.write(result);

function solveQuadr(a, b, c) {
   const d = calcDisc; 
   const x1 = calcX1(-b + Math.sqrt(calcDisc)) / 2 * a;
   const x2 = calcX2 (-b - Math.sqrt(calcDisc)) / 2 * a;
   
   return 'x1= '+ x1 + ' ' + 'x2= '+ x2;
}

if (a === 0) {
//    function (stop) {
    document.write("It is not a Quadratic equation, it is linear equation");
//    return;
//    }
} else if (a !== 0) {
    function calcDisc(a, b, c) {
    calcDisc = b*b - 4 * a * c;
    }
}

function calcX1 () {
     (-b + Math.sqrt(calcDisc)) / 2 * a;
}

function calcX2 () {
    let secondSolution = (-b - Math.sqrt(calcDisc)) / 2 * a;
}*/






/*    calcDisc = b*b - 4 * a * c;
    x1 = (-b + Math.sqrt(calcDisc)) / 2 * a;
    x2 = (-b - Math.sqrt(calcDisc)) / 2 * a;
    return 'x1 = ' + x1 + 'x2 = ' + x2;
}*/









/*function calcDisc(a, b, c) {
    calcDisc = b*b - 4 * a * c;
}

if (d === 0) {
    x1 = -b / 2 * a;
    document.write(result);
} else if (d > 0) {
    x1 = (-b + Math.sqrt(d)) / 2 * a;
    x2 = (-b - Math.sqrt(d)) / 2 * a;
    result = 'x1= ' + x1 + ' ' + 'x2= ' + x2;
}*/