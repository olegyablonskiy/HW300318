const a = parseFloat(prompt('Enter "a" coefficient, do not forget about minus, if it is there!, if there is no number just Enter 1'));
const b = parseFloat(prompt('Enter "b" coefficient, do not forget about minus, if it is there!, if there is no number just Enter 1'));
const c = parseFloat(prompt('Enter "c" coefficient, do not forget about minus, if it is there!'));

const result = solveQuadr(a, b, c);
document.write(result);

function solveQuadr(a, b, c) {
    if (a === 0) {
        let x = -c / b;
        return 'This is not a Quadratic equation, just a simple equation and result is' +' ' + 'x= ' + x;
    }
    
    const disk = b * b - 4 * a * c;
    if (disk < 0) {
        return 'Has no real roots';
    }
    
    const x1 = (-b + Math.sqrt(disk)) / (2 * a);
    const x2 = (-b - Math.sqrt(disk)) / (2 * a);
    return 'x1= ' + x1 + ' ' + 'x2= ' + x2;
}
