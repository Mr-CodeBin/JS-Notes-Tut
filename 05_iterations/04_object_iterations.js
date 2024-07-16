
// Object iterations




// Object does not implement an iteration protocol, 
//and so objects are not directly iterable 
//using the JavaScript for...of statement (by default).


// How to iterate Objects then?
// An object can implement the iteration protocol, 
// or you can get an iterable for an object 
//using Object.keys or Object.entries.

//The for...in statement allows you to iterate over the enumerable properties of an object.


const myObject ={
    game1: 'God of war',
    game2: 'AC',
    game3: 'COD',
    game4: 'valhalla',
    game5: 'farcry',
    game6: 'last of us',
    game7: 'valorant',
}


for (const key in myObject) {
    // console.log(key); 
    //this print only the keys of the object
}

// we need to print values data of keys data from myObject:

for (const key in myObject) {
    // console.log(`This name ${key} is for: ${myObject[key]}`); 
    //this print only the keys of the object
}

//can we use "for...in loop" on array:

const ProgrammingLanguages= [ 'cpp', 'py', 'dart', 'go', 'js', 'html']


for (const key in ProgrammingLanguages) {
    // console.log(key);
    //here, it shows that arrays are also objects, in format of key-value pairs
    //and, Array were designed to hold the prefined key as indexes to make them iterable (0-based indexing)

    // console.log(ProgrammingLanguages[key]); // prints the value for every key-index.
}



//checking if for in loop works on maps as well, lets see:

const map = new Map()

map.set('a', 'apple')
map.set('b', 'ball')
map.set('c', 'cat')
map.set('a', 'apple')// map dont take duplicate ways (unique data keys only)
map.set('a', 'abacus') // this will not print as well (duplicate)


for (const key in map) {
    console.log(key);
    //prints no output becoz, MAPS ARE NOT ITERABLE LIKE THIS USING FOR-IN LOOP
}








