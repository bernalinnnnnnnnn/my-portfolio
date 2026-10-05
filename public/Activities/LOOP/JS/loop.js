//for loop(there a 2 types of loop)
for (let a = 0; a < 10; a++) {
    console.log(a);
}

//for in loop (index, start from 0 - 4)
const numbers = [45, 4, 9, 16, 25];
for (let c in numbers) {
  console.log(numbers[c]);
}

//for of loop
const cars = ["BMW", "Volvo", "Mini"];
for (let car of cars) {
  console.log(car);
}

const word = "The quick brown fox"
for(let letter of word) {
    console.log(letter)
}

//while loop
let b = 20;
while (b < 30) {
    console.log(b);
    b++;
}