
//-----------------------------------------------//
// this session is about :
//      Object literals


// Objects

// declare objects :
// 1. as literal 
// 2. as constructor 


//singleton  => when object made from constructor 
//Object.create  => this object created from constructor as singleton object


//-----------------------------------------------//
//Object literals



const mySym = Symbol("key1") // this is the symbol which is needed to defined before using [] , symbol

const jsUser = {
    name: "CodeBin",
    "full name": "THE CODEBIN", // special point for it line 30
    // mySym: "mykey1", // cant use symbol like this as its a string not symbol
    [mySym]: "mykey1", // use [] to refer to symbol that is provided 
    age: 196,
    location: "Mars",
    email: "mrcodebin@Phemail.com",
    isLoggedIn: true,
    lastLoginDays: ["Monday", "Thursday"]
}


// console.log(jsUser.email); // dont use this instead use below way =>  ["email"]

// console.log(jsUser["email"]);
// console.log(jsUser["full name"]);


// console.log(jsUser.mySym); // this is printed as string we need as symbol object
// console.log(typeof jsUser.mySym);

// console.log(jsUser[mySym]);

// console.log(typeof jsUser[mySym]); // o/p:string  =>here, Type is string as value inside it is getting accessed which is string

jsUser.email = "WEFREE@PHEMAIL.COM"

// Object.freeze(jsUser) // lock Object from getting changed by anyone

jsUser.email = "ABCDEFGHIJK@.com" // this change didnt happen due to freeze() of object

// console.log(jsUser); 


jsUser.greeting = function(){
    console.log("HELLO FELLOW CODER");  
}

jsUser.greeting2 = function(){
    console.log(`HELLO FELLOW CODER, ${this.name} `);  
}

// console.log(jsUser.greeting); //output: [Function (anonymous)]


console.log(jsUser.greeting()); 
// output: HELLO FELLOW CODER
//         undefined

console.log(jsUser.greeting2());
//output: HELLO FELLOW CODER, CodeBin
//        undefined




