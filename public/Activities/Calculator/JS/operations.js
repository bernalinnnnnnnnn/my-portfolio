
function plus() {
    operate('+');
}

function minus() {
    operate('-');
}

function times() {
    operate('*');
}

function divide() {
    operate('/');
}

function equals() {
    const num = document.getElementById('display').value;
    const num2 = document.getElementById('display2').value;
    const operator = document.getElementById('operator').value;

    let answer = calculate(Number(num2), Number(num), operator);
    if (operator === '/' && Number(num) === 0) {
        alert("Cannot divide by zero");
        return;
    }

    document.getElementById('display').value = answer;
    document.getElementById('display2').value = '';
    document.getElementById('operator').value = '';
}

function operate(op) {
    const num = document.getElementById('display').value;
    const num2 = document.getElementById('display2').value;
    const operator = document.getElementById('operator').value;

    if (num !== "0" && num !== "") {
        if (num2 !== "") {
            document.getElementById('display2').value = calculate(Number(num2), Number(num), operator);
        } else {
            document.getElementById('display2').value = num;
        }
        document.getElementById('display').value = "0";
    }

    document.getElementById('operator').value = op;
}

function calculate(num1, num2, operator) {
    switch (operator) {
        case '+':
            return num1 + num2;
        case '-':
            return num1 - num2;
        case '*':
            return num1 * num2;
        case '/':
            return num1 / num2;
        default:
            return num1;
    }
}
