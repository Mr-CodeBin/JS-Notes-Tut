


const user ={

    username: "codeibinsada",
    price: "21312",
 

    welcomeMessage: function(){
        console.log(`${this.username} , welceme to the website: `)
        console.log(this);
    } 
}



// user.welcomeMessage()
// user.username = "FLEIX"
// user.welcomeMessage( ) 



//In Nodejs environment, "this" is just a empty object
// BUT
// In browser-console JS environment, "this" is a Window Object, not empty
// console.log(this);




// function yehHai(){
//     let username = "codebin"

//     // console.log(this.username); // this wont take value from this scope which is "codebin"
    
//     // console.log(this);

// }

// yehHai()


// arrow function defination:

// const yehBhiHai = () => {
//     let username = "codebin"

    // here, arrow functions works same as normal function
//     console.log(this.username); 
//     console.log(this);

// }

// yehBhiHai()


//normal arrow function define:
// using return keyword means this is EXPLICIT RETURN:

// const addTwo = (num1, num2) => {
//     return num1 + num2
// }

// console.log(addTwo(3,10));



// Implicit Return: means mei maan leta hu aapko return krne ki zrurrt nhi h

// const addTwo = (num1, num2) => num1 + num2

// const addTwo = (num1, num2) => (num1+ num2)


const addTwo = (num1, num2) => ({username: "codeinjasbfhjvajfv"})

// console.log(addTwo(3,10));



const myArray = [2,3,4,5,6,7,8,9]



// console.log( myArray.forEach());
// myArray.forEach ( () =>  {})

// myArray.forEach ( () =>  ())











