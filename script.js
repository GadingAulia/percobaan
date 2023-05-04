//  ====== 1. ambil element ====
let btnDecrement = document.getElementById("btn-decrement")
let btnIncrement = document.getElementById("btn-increment")
let countNumber = document.getElementById("count-number")

// console.log(countNumber.innerText)

let count = 0

console.log(btnDecrement);
console.log(btnIncrement);
console.log(countNumber);

// === 2. manipulasi / event ====

btnIncrement.onclick = increment

function decrement(){
    console.log("decrement")
    count = count -1
    countNumber.innerText = count
}

function increment(){
    console.log("increment")
    count = count +1
    countNumber.innerText = count
}