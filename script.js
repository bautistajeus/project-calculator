const a = null
const b = null

function calculate(operator) {
    switch(operator) {
        case '+':
            return (a + b);
            break;
        case '-':
            return (a - b);
            break;
        case '*':
            return (a * b);
            break;
        case '/':
            return (a / b);
            break;
    }
}
