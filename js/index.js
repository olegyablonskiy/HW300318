const a = parseInt(prompt('Enter "a" coefficient, do not forget about minus, if it is there!, if there is no number just Enter 1'));
const b = parseInt(prompt('Enter "b" coefficient, do not forget about minus, if it is there!, if there is no number just Enter 1'));
const c = parseInt(prompt('Enter "c" coefficient, do not forget about minus, if it is there!'));

const result = solveQuadr(a, b, c);
document.write(result);

function solveQuadr(a, b, c) {
   const d = calcDisk; 
   const x1 = (-b + Math.sqrt(d)) / (2 * a);
   const x2 = (-b - Math.sqrt(d)) / (2 * a);
   return 'x1= '+ x1 + ' ' + 'x2= '+ x2;
}

function calcDisk (a, b, c) {
    calcDisk = b** - 4 * a * c;
    if (calcDisk < 0) {
    return 'No roots';
    } else if (calcDisk === 0) {
        x = (-b / (2 * a));
        return 'x= ' + x;
    } else if (calcDisk > 0) {
        return d;
    }
}