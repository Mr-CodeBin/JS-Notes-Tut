
//for of loops


//Higher order function

["","",""] //Array definition
[ {} , {} , {} ] // Array with Objects in it 




//maps

//maps are iteratable directly 
// and can be iterated using for...of loop statement.


const map = new Map()

map.set('a', 'apple')
map.set('b', 'ball')
map.set('c', 'cat')
map.set('a', 'apple')// map dont take duplicate ways (unique data keys only)
map.set('a', 'abacus') // this will not print as well (duplicate)

// console.log(map);


for (const key of map) {
    // console.log(key); // print in form of array with keys and values in same array
}


for (const [key] of map) {
    // console.log(key); // print key data normally as string 
}

// syntax for printing key data and value data specifically from a map 
for (const [key, value] of map) {
    // console.log(typeof key , typeof value);
    // console.log(key +" : "+ value ); // print key and value data normally as string
}


// syntax for printing key data and value data specifically from a map 
for (const [k, v] of map) {
    // console.log(typeof key , typeof value);
    // console.log(k +" :- "+ v ); // print key and value data normally as string
}

 

const myObject = {
    'game1': 'God of war',
    'game2': 'AC',
    'game3': 'COD',
}
// const myObject = {
//     game1: 'God of war',
//     game2: 'AC',
//     game3: 'COD',
// }


for (const [key,value] of myObject) {
    console.log(k +" :- "+ v );  
    //this myObject cant be iterated like this, there are other methods to iterate a Object
}





