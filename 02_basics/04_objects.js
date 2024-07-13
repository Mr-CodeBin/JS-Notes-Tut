
// declare objects as constructor

// singleton Object

//two ways to define objects but both are fine and similar:

// const tinderUser = new Object() // this is singleton Object
const tinderUser = {} // this is non-singleton Object

tinderUser.id = "13bssdghs"
tinderUser.name = "CODEBIN"
tinderUser.isLoggedIn = false


// console.log(tinderUser);

const regularUser = {
    email: "codebin@gmail.com",
    fullname : {
        userfulllname: {
            firstname: "CODEBIN",
            lastname: " PARASACASFASFAS",
        }
    }
}

// console.log(regularUser.fullname.userfulllname.lastname);


const obj1 ={1: "a", 2: "b"}
const obj2 ={3: "a", 4: "b"}

// const obj3 = {obj1, obj2}; // avoid using this instead use the below function


// const obj3 = Object.assign(obj1, obj2) 

//--------------------------------------------------//
//here the obj2(source) gets assigned to obj1(target)
 // obj1 => target  , obj2 => source
// BUT
//look the case below:
//--------------------------------------------------//



// const obj3 = Object.assign({} , obj1, obj2)
//--------------------------------------------------//

// {}=> acts as Target and all Others (eg: obj1, obj2, etc)  => acts as Source Objects getting assigned to target object...
//   {} => EMPTY OBJECT
//here, obj1, obj2,..... all will get assigned to {} object then as obj3 

//---------------------------------------------------------------------------------------//
// it is a best practice to use {} object into this case: Object.assign({} , obj1, obj2) to ensure the safe data assignment to new Object
//--------------------------------------------------//


// const obj3 = {obj1, obj2}; // avoid using this instead use the below function

const obj3 = {...obj1,...obj2} //BEST WAY IS USE THIS TO ASSIGN

// console.log(obj3);



const users =[
    {
        id: 1,
        email: "abc@gmail.com"

    },
    {
        id: 1,
        email: "abc@gmail.com"

    },
    {
        id: 1,
        email: "abc@gmail.com"

    },
]


users[1].email

// console.log(tinderUser);

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

// console.log(tinderUser.hasOwnProperty('name'));
// console.log(tinderUser.hasOwnProperty('names'));


// link: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object


const course ={
    coursename: "js course",
    price: "999",
    courseTeacher: "Youtube",
}

//course.courseTeacher


// below line is destructing concept:

const {courseTeacher} = course
const {courseTeacher: TeacherName} = course

console.log(courseTeacher);

console.log(TeacherName);


//JSON data format:

// {
//     "name"  : "codeBin",
//     "coursename" : "JS Tut",
//     "price" : "9999",
// }

//JSON  data in ARRAY format:

// [
//     {},
//     {},
//     {},
//     {},
// ]


// json data Sample Format:

// https://randomuser.me/api/

// for better Readability use jsonFormatter website

const data = {
    "results": [
      {
        "gender": "female",
        "name": {
          "title": "Mrs",
          "first": "Sarah",
          "last": "Murray"
        },
        "location": {
          "street": {
            "number": 6423,
            "name": "Springfield Road"
          },
          "city": "Naas",
          "state": "Carlow",
          "country": "Ireland",
          "postcode": 18603,
          "coordinates": {
            "latitude": "2.9223",
            "longitude": "0.5685"
          },
          "timezone": {
            "offset": "-10:00",
            "description": "Hawaii"
          }
        },
        "email": "sarah.murray@example.com",
        "login": {
          "uuid": "daa1aca0-180d-4bc8-876a-341615eb1425",
          "username": "redduck336",
          "password": "hardy",
          "salt": "Gb1RXFGD",
          "md5": "ce87486e9ffcec60414640e113f0c57c",
          "sha1": "6664d8dfd56e768469890fdbb02c933464ef8d44",
          "sha256": "eff74d6c80f3be81afc6006a666fc313d3dfe1c7343caea0dd731ce4d75a4402"
        },
        "dob": {
          "date": "1950-12-16T22:09:12.172Z",
          "age": 73
        },
        "registered": {
          "date": "2010-08-23T13:39:06.280Z",
          "age": 13
        },
        "phone": "031-971-2137",
        "cell": "081-024-3701",
        "id": {
          "name": "PPS",
          "value": "0576311T"
        },
        "picture": {
          "large": "https://randomuser.me/api/portraits/women/10.jpg",
          "medium": "https://randomuser.me/api/portraits/med/women/10.jpg",
          "thumbnail": "https://randomuser.me/api/portraits/thumb/women/10.jpg"
        },
        "nat": "IE"
      }
    ],
    "info": {
      "seed": "98ab138081381532",
      "results": 1,
      "page": 1,
      "version": "1.4"
    }
}



