// Task 1

// let Name = prompt("Enter you name");
// function wellcomeMessage() {
//     alert("welcome:" + Name);
// }
// wellcomeMessage();

// Task 2

// function GenrateQuote(b) {
//     let rand = Math.ceil(Math.random() * b.length - 1);
//     return b[rand];
// }
// let fruit = ["orange", "mango", "apple", "banana", "strawberry", "pineapple"];
// let randomValue = GenrateQuote(fruit);
// console.log(randomValue);


// Task 3
function GenrateRandomNumber(num) {
    return Math.ceil(Math.random() * num);

}
let result = GenrateRandomNumber(120);
console.log(result)
