const name  = "CodeBin"
const repoCount = 50

// console.log(`Hello my name is ${ name }. ANd my health bar is ${ repoCount}`);

//---------------------------------------------//
    // new String here is Object in JS
//---------------------------------------------//

const gameName = new String('CodeBin-Git-hub')
// console.log(gameName[0]);
// console.log(gameName.__proto__);


// console.log(gameName.length);
// console.log(gameName.toUpperCase);


// console.log(gameName.charAt(5));
// console.log(gameName.indexOf('G'));

const newString =gameName.substring(0, 5) 

//---------------------------------------------//
    // negative index is not allowed in substring()
//---------------------------------------------//

// console.log(newString);


// const anotherString = gameName.slice(-10,6);// eBin
// const anotherString = gameName.slice(-10,-1);// eBinGithu
const anotherString = gameName.slice(-10);// eBinGithub


//---------------------------------------------//
    // negative index works in them slice()
//--------------------------------------------//
// console.log(anotherString);
// console.log(anotherString.length);



const newStringOne = "                          heilo          "

// console.log(newStringOne);
// console.log(newStringOne.trim());


const url = "https://Codebin.com/hello%20world"

console.log(url.replace('%20', '-' ));

console.log(url.includes('Alex'));

console.log(gameName.split('-'));


