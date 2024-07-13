
//Scopes:
//1. Global Scope
//2. Local Scope


//this is a scope => {}   inside if-condition
if(true){
    //defined inside the scope...
    let a= 10
    const b = 20
    var c = 30 //dont use var or blank type, it creates problem in code, doesnt consider Scope properties..

    // console.log("Inside wala a: " , a);



}




// console.log(a);
// console.log(b);
// console.log(c);


// Special point:

//Global scopes through IDLE in Node are different and
    //       and
// Global scopes through browser-inspect-console are different





function one(){
    const username = "codebion312"
    function two(){
        const website = "GITHUB"
        console.log(username);

    }
    // console.log(website);
    
    two()
}

// one()

if (true) {
    const username = "bincodeasdin231"
    if (username == "bincodeasdin231") {
        const website = "  --GITTHUBASDAS312312"
        // console.log(username + website);
    }
    // console.log(website);

}

// console.log(username);


//---------------   INTERESTING CONCEPT  -------------------------//


// addone(5) // this will work as its pure function,  not hoisting here
function addone(num){

    return num + 1
}

console.log(addone(5));

// Hoisting Concept 



// addTwo(5) // this is storing value into variable from function process, SO hoisting comes in between to interrupt, GOOD THING
//    this below addTwo is expression (also called variables holding functions) holding function
const addTwo = function(num){
    return num + 2
}

console.log(addTwo(5));







