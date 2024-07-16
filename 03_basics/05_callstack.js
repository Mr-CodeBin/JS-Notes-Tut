

// JavaScript Execution Context


// 1. Global Execution Context 

// 2. Function Execution Context

// 3. Eval Execution Context ( property of Global EC, in "Monogos" )


// Phases:

    // 1. Memory Creation Phase or (Creation Phase)
    // 2. Execution Phase


let val1 = 10
let val2 = 30

function addNum(num1, num2){
    let total = num1 + num2
    return total
}

let result1 = addNum(val1, val2)
let result2 = addNum(44, 103)

console.log(result1);
console.log(result2);











