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



const displayCurrent = document.querySelector('.displayCurrent')
const displayPrevious = document.querySelector('.displayPrevious')
const clearButton = document.querySelector('#clear')
const buttonNumber = document.querySelectorAll('#num')
const operatorButton = document.querySelectorAll('#operator')
const equalsButton = document.querySelector('#equals')

let firstNum = null
let secondNum = null


buttonNumber.forEach((button) => {
    button.addEventListener('click', () => {
        numbers = button.value
        displayCurrent.textContent += numbers
        secondNum = displayCurrent.textContent
        console.log(secondNum)
    })
});

operatorButton.forEach((operator) => {
    operator.addEventListener('click', () => {
        displayPrevious.textContent = displayCurrent.textContent + operator.value
        firstNum = displayCurrent.textContent
        displayCurrent.textContent = 0
        console.log(firstNum)
        

    })
})

equalsButton.addEventListener('click', () => {
    
})

clearButton.addEventListener('click', () => {
    displayCurrent.textContent = 0
    displayPrevious.textContent = null
})

// operatorButton.addEventListener('click', calculate(operator))