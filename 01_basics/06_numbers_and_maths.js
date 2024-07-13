const score = 400

// console.log(typeof score);
// console.log(score);


//in Number/integer type
const numBalance = new Number(100)

// console.log(typeof(numBalance));
// console.log(numBalance);
// console.log(numBalance.toFixed(4));



//in string type

const balance = new Number(100).toString();

// console.log(typeof(balance));
// console.log(balance);


const otherName = 23.78233768;

// console.log(otherName.toPrecision(4));
// console.log(otherName.toPrecision(2)); //rounds off the number after the given digit position



const money = 100000000
// console.log(money.toLocaleString('en-US')); //us standard of representing currency
// console.log(money.toLocaleString('en-IN'));

//refer mdn docs to learn more about it :
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/toLocaleString



//---------------------Maths----------------------//

// console.log(Math);
// console.log(Math.abs(-4));
// console.log(Math.round(5.77));
// console.log(Math.ceil(5.07));
// console.log(Math.floor(5.80));

// console.log(Math.min(4,19,29,30));
// console.log(Math.max(4,19,29,30));


console.log(Math.random());

console.log((Math.random()*10) +1);
//get values  from 1 to 9.99...


// *10 represents shifting value to left by one digit

//doing +1 to avoid zero values from random()
// eg: 0.001   => 1.01 


console.log(Math.floor(Math.random()*10) +1);
//get values from 1 to 9



const min =10;
const max = 20;

console.log(Math.floor(Math.random()* (max - min + 1)) + min);

// adding ( + min ) to set value to be above the min range

// ( max - min + 1 ) to find the range and get number between min-max range.


