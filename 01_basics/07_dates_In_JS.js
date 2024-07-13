
//Dates



let myDate = new Date()

// console.log(myDate);
// console.log(myDate.toString());
// console.log(myDate.getTime());
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleDateString());
// console.log(myDate.toLocaleTimeString());
// console.log(myDate.toTimeString());
// console.log(myDate.toJSON());


// let myCreatedDate = new Date(2024,0, 20)
// let myCreatedDate = new Date(2024,0, 20, 5, 14)
// let myCreatedDate = new Date("2024-01-30")
let myCreatedDate = new Date("01-20-2024")



// console.log(myCreatedDate.toString());
// console.log(myCreatedDate.toLocaleString('en-US'));
// console.log(myCreatedDate.toLocaleString('en-IN'));


let myTimeStamp =  Date.now() // get todays date into milli seconds

// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime()); //used for comparison between myTimeStamp and myCreatedDate

// console.log(Date.now()/1000); //get today's date into seconds
// console.log(Math.floor(Date.now()/1000)); // gets smallest today's date value into seconds


let newDate = new Date()



// console.log(newDate.getMonth()); // o/p: 6 but month is july (starts from 0 in this case)
// console.log(newDate.getMonth() + 1); // o/p: 7 but month is july (Now starts from 1 in this case)

// console.log(newDate.getDay()); // output: 6 means (today's) saturday M,T,W,T,F,S,S  => 1,2,3,4,5,6,7

 
// console.log(`Day number is ${newDate.getDay()} and the time is  `);


//customization on functions in Date().functions()

newDate.toLocaleString('default', {
    weekday: "long",
    day: "2-digit",
    hour:"numeric",
})


//Documentation:
 
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date



