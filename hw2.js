
let action = '';
let actionId = '';
function calculate(number_1,number_2) {
    console.log(action);
    if (action === '+') {
        return number_1 + number_2;
    } 
    if (action === '-') {
        return number_1 - number_2;
    } 
    if (action === '/') {
        return number_1 / number_2;
    } 
    if (action === '*') {
        return number_1 * number_2;
    } 
    return "Incorrect action";
}

window.onload=function(){
    
    let actions = document.querySelectorAll('.action');

    actions.forEach((act) => {
        act.addEventListener('click',selectAction);
    })



    let calcBut = document.querySelector('#calc');
    calcBut.addEventListener ('click', createCalc );
}


function createCalc() {
    let firstNumber = document.querySelector('#first').value;
    let secondNumber = document.querySelector('#second').value;
    console.log(firstNumber, secondNumber);
    if (firstNumber === ''){
        alert('Вы забыли ввести первое число');
        return;
    }
    if (secondNumber === ''){
        alert('Вы забыли ввести второе число');
        return;
    }
    let result = calculate(+firstNumber,+secondNumber);
    let resultElement = document.querySelector('#result');

    if (Number.isNaN(result) === false) {
        resultElement.classList.add('makeGreen');
        resultElement.innerHTML = result;
    } else {
        resultElement.classList.remove('makeGreen');
        resultElement.innerHTML = '';
        alert('ошибка, введите точное число');
    }
    
}

function selectAction (event) {

    action = event.target.innerHTML;
    console.log(action);
    if (actionId !== '') {
        let lastAction = document.querySelector('#' + actionId);
        lastAction.classList.remove('makeRed');
    }
    event.target.classList.toggle('makeRed');
    actionId = event.target.id; //for next select action
}