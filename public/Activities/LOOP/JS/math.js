function sum() {
    //USE FOR LOOP TO COMPUTE THE SUM OF 1 - 20
    const num = document.getElementById('number').value

    const display = document.getElementById('display');

    /* const display = document.getElementById('display');
    display.innerHTML += "sample</br>"; */

    /* document.getElementById('display').innerHTML = "sample"; */

    let answer = "";
    let sum = 0;

    for (let a = 1; a <= num; a++) {
        answer += a + "<br>";
        sum += a;
    }
    answer += "The sum is " + sum;
    display.innerHTML += answer;

}

function factorial() {
    /*     let number = document.getElementById('number').value
    
        //while loop, factorial
        let answer = "";
        let product = number;
        let num = number;
    
        while (num > 1) {
            answer += num + "<br>"
            product *= (num - 1);
            num--;
        }
        answer += num + "<br>"
        answer += "The factorial " + number + " is " + product;
        document.getElementById('display').innerHTML += answer; */

    let num = document.getElementById('number').value, product = 1, answer = "";

    for (let i = num; i > 1; i--) {
        answer += i + "<br>";
        product *= i;
    }

    answer += "1<br>The factorial " + num + " is " + product;
    document.getElementById('display').innerHTML += answer;
}

function odd() {
    let num = document.getElementById('number').value;
    let answer = "";

    for (let i = 1; i <= num; i++) {
        if (i % 2 !== 0) answer += i + "<br>";
    }

    document.getElementById('display').innerHTML = answer;
}

function even() {
    let num = document.getElementById('number').value;
    let answer = "";

    for (let i = 1; i <= num; i++) {
        if (i % 2 === 0) answer += i + "<br>";
    }

    document.getElementById('display').innerHTML = answer;


}
