

// Immediately Invoked Function Expressions (IFFE)

 // Global scope's pollution creates problem or declaration pollution, to remove it we use IIFE:
//  Eg:
//      function yehHai(){
    //     let username = "codebin"
    
        // console.log(this.username); // this wont take value from this scope which is "codebin"
        
        // console.log(this);
    
    // }
    
    // this line below is the pollution that takes space and time to get invoked...
    
    // yehHai()






// yehHai()   // to execute yehHai function, it takes yehHai() this Declaration to invoke. 


// TO REMOVE THIS, WE USE:


// The function that gets immediately invoked => IIFE , definition below:
 
(function chai (){
    console.log(`DB connected!`);
}) (); // this ; needed...

// we need ; here to seperate the above IIFE function to lower IIFE function 





( function chai2() {
    // named IIFE 
    console.log(`DB CONNECTED SECOND`);
}  )();


( ()=> {
    // arrow function used 
        // or
    //Not Named IIFE
    console.log(`DB CONNECTED THIRD`);
} )();


( (name)=> {
    // arrow function
        // or
    //Not Named IIFE but having parameter
    console.log(`${name} Your DB CONNECTED THIRD`);
} )("CODEBIN"   /* passed argument here */)





