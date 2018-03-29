const a = parseInt(prompt('Enter "a" coefficient, do not forget about minus, if it is there!, if there is no number just Enter 1'));
const b = parseInt(prompt('Enter "b" coefficient, do not forget about minus, if it is there!, if there is no number just Enter 1'));
const c = parseInt(prompt('Enter "c" coefficient, do not forget about minus, if it is there!'));

const result = solveQuadr(a, b, c);
document.write(result);

function solveQuadr(a, b, c) {
   if (a === 0) {
        document.write("It is not a Quadratic equation, it is linear equation");
        return;
    } else if (a !== 0) {
        calcDisc = b*b - 4 * a * c;
        if (calcDisc === 0){
            const x = -b / 2 * a;
            return 'x= '+ x;
        }
    }
    const x1 =(-b + Math.sqrt(calcDisc)) / 2 * a;
    const x2 =(-b - Math.sqrt(calcDisc)) / 2 * a;
 
    return 'x1= '+ x1 + ' ' + 'x2= '+ x2;
}
   