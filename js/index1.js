const a = parseInt(prompt('Enter "a" coefficient, do not forget about minus, if it is there!, if there is no number just Enter 1'));
const b = parseInt(prompt('Enter "b" coefficient, do not forget about minus, if it is there!, if there is no number just Enter 1'));
const c = parseInt(prompt('Enter "c" coefficient, do not forget about minus, if it is there!'));

const result = solveQuadr(a, b, c);
document.write(result);

function solveQuadr(a, b, c) {
   if (a === 0 && b !==0 && c !== 0) {
        x = -(c) / b;
        return 'x= ' + x;
      } 
    if (a !==0 && b !== 0 && c === 0) {
        x1 = 0;
        x2 = -(b) / a;
        return 'x1= ' + x1 + ' ' + 'x2= ' + x2;
           }
     if ((a !== 0) && (b !== 0) && (c !== 0)) {
         calcDisc = (b * b) - (4 * a * c);
    }
   /* if (a !== 0 &&  b === 0 && c !== 0) {
            x1 = Math.sqrt(c/a);
            x2 = -(Math.sqrt(c/a));
            if ((c/a) < 0);
            return 'Has no real roots';
            } else if ((c/a) > 0){
                x = Math.sqrt(c/a);
                return 'x= ' + '(+/-)' + x;
            }*/
     if (calcDisc > 0){
    x1 = (-b + Math.sqrt(calcDisc)) / (2 * a);
    x2 = (-b - Math.sqrt(calcDisc)) / (2 * a);
    return 'x1= ' + x1 + ' ' + 'x2= ' + x2;
        } else if (calcDisc < 0) {
            return 'Has no real roots';
        } else if (calcDisc === 0) {
             x = (-(b) / (2 * a));
            return 'x= ' + x;
        } 
    
    }        

