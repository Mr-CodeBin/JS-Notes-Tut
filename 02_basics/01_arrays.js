
//arrays

// javascript arrays are resizable 

//  JS array-copy operations create **shallow copies** (pass-by-reference  => reference to the original object)
// if change either source or the copy, changes will reflect in the other object ( or original object) as well.

// Heap wala logic video link: 
// https://www.youtube.com/watch?v=7gwc-1czolw&list=PLu71SKxNbfoBuX3f4EOACle2y-tRC5Q37&index=10&pp=iAQB



const myArr = [0,1,2,3,4,5,6]
// const heroNames =[ "ironman", "Ichigo", " Quicksilver"]

// const myArr2 = new Array(1,2,3,4)

// console.log(myArr[2]);
// console.log(myArr2);


// Array methods

// myArr.push(60)
// myArr.push(8)
// myArr.pop()


// myArr.unshift(10)
    // console.log(myArr);
// myArr.unshift(50)
// myArr.shift()


// console.log(myArr.includes(4));
// console.log(myArr.includes(20));

// console.log(myArr.indexOf(4));
// console.log(myArr.indexOf(20));

const newArr = myArr.join()



// console.log(myArr);
// console.log(typeof myArr);

// console.log( newArr);
// console.log(typeof newArr);


//slice , splice 


// using slice()
console.log("A ", myArr);

const myn1 = myArr.slice(1, 3)

console.log(myn1);
console.log("B ", myArr);


//using splice
// remove the range of elements from array using splice()
const myn2 = myArr.splice(1, 3)

console.log("B ", myArr); 

console.log(myn2);


//









