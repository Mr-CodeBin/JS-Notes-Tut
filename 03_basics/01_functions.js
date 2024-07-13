
//functions



function userLogInfo(username){

    return `${username} just logged in ...`

}

console.log(userLogInfo("codebin"));


// function calculateCartPrice(...num1){
//     return num1
// }


function calculateCartPrice(val1, val2, ...num1){
    return num1
}

console.log(calculateCartPrice(100, 300, 400, 500));


const user = {
    username: "codebin",
    price: "109"
}

function handleObject(anyobject){
    console.log(`username is ${anyobject.username} and price is ${anyobject.price}`);
}


// handleObject(user)


handleObject({
    username: "code12123",
    price: "14134"
})

const myNewArray = [200, 400, 100, 600]

function returnSecondValue(getArray){
    return getArray[2]
}

// console.log(returnSecondValue(myNewArray));

console.log(returnSecondValue([200, 400, 100, 600]));









