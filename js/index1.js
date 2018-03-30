const a = parseInt(prompt('Enter "a" coefficient, do not forget about minus, if it is there!, if there is no number just Enter 1'));
const b = parseInt(prompt('Enter "b" coefficient, do not forget about minus, if it is there!, if there is no number just Enter 1'));
const c = parseInt(prompt('Enter "c" coefficient, do not forget about minus, if it is there!'));

const result = solveQuadr(a, b, c);
document.write(result);

function solveQuadr(a, b, c) {
    if (a === 0 && b !== 0 ) {
        let x = -(c) / b;
        return 'This is not a Quadratic equation, just a simple equation and result is' +' ' + 'x= ' + x;
    }
    /*if (a !== 0 && b !== 0 && c === 0) {
        x1 = 0;
        x2 = -(b) / a;
        return 'x1= ' + x1 + ' ' + 'x2= ' + x2;
    }*/
  /*  if ((a !== 0) && (b === 0) && (c !== 0)) {
        x1 = Math.sqrt(c / a);
        x2 = -(Math.sqrt(c / a));
        return 'x1= ' + x1 + ' ' + 'x2= ' + x2;
    }*/
    
    let calcDisc = (b * b) - (4 * a * c);
    if (calcDisc < 0) {
        return 'Has no real roots';
    }
    
    let x1 = (-b + Math.sqrt(calcDisc)) / (2 * a);
    let x2 = (-b - Math.sqrt(calcDisc)) / (2 * a);
    return 'x1= ' + x1 + ' ' + 'x2= ' + x2;
    
    /*if ((a !== 0) && (b === 0) && (c !== 0)) {
        x1 = Math.sqrt(c / a);
        x2 = -(Math.sqrt(c / a));
        return 'x1= ' + x1 + ' ' + 'x2= ' + x2;
    }
    if ((c / a) < 0) {
        return 'Has no real roots';
    } else if ((c / a) > 0) {
        x = Math.sqrt(c / a);
        return 'x= ' + '(+/-)' + x;
    }*/
}
