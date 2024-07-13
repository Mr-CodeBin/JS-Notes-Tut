


const marvel_heros =["thor", "Ironman", "spiderman"]
const dc_heros = ["superman", "flash" ,"batman"]


// marvel_heros.push(dc_heros)
// console.log(marvel_heros);

// console.log(marvel_heros[3][1]);
// console.log(marvel_heros[3][2]);

const allHeros = marvel_heros.concat(dc_heros);
// console.log(allHeros);


const newHeros  = [...marvel_heros, ...dc_heros]
//... => spreads the current array and adds each elements to new array

// console.log(allHeros);



const another_array = [1, 2, 3, [4,5,6], 7, [6,7,[4,6]] ]

const real_new_array = another_array.flat(Infinity)

// console.log(real_new_array);

// console.log(Array.isArray("CodeBinGithub"));
// console.log(Array.from("CodeBinGithub"));


// console.log(Array.from({name: "CodeBinGithub"})); 

//output: []  
// special point for above line
// we have to tell from() to make array of what type: key-value pair, etc etc...


let s1 = 100
let s2 = 300
let s3 = 1600

console.log(Array.of(s1, s2, s3));
