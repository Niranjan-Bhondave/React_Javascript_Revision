const students = [
  {
    id: 1,
    name: "Aarav",
    age: 20,
    enrolled: true,
    courses: ["JavaScript", "HTML"],
    grades: {
      JavaScript: 88,
      HTML: 92
    }
  },
  {
    id: 2,
    name: "Priya",
    age: 22,
    enrolled: true,
    courses: ["JavaScript", "CSS"],
    grades: {
      JavaScript: 95,
      CSS: 90
    }
  },
  {
    id: 3,
    name: "Rohan",
    age: 19,
    enrolled: false,
    courses: ["HTML"],
    grades: {
      HTML: 75
    }
  }
];

const availableCourses = [
  "JavaScript",
  "HTML",
  "CSS",
  "React",
  "NodeJS"
];

const schoolName = "CoolSkool";
let totalStudents = students.length;

//console.log(`Welcome to ${schoolName}. We have ${totalStudents} students`);
//console.log(`Length of school name: ${schoolName.length}`);
// console.log(`First character of school name: ${schoolName[0]}`);
// console.log(`First character of school name: ${schoolName[schoolName.length-1]}`);

students.push({
 id: 4,
 name: "Neha",
 age: 21,
 enrolled: true,
 courses: [],
 grades: {}
});
//console.log(students);

// for(var student of students)
//     console.log(student.name);

// grades = {
//    "JavaScript": 88,
//    "HTML": 92
// }

// function avg(grades){
//     var count = 0,sum=0;
//     for(var subject in grades){
//         count++;
//         sum+=grades[subject];
//     }

//     return sum == 0 ? 0 : sum/count;
// }

// console.log(avg(grades));

// function addCourse(studentId,courseName){
//     for(var student of students){
//         if(student.id === studentId){
//             student.courses.push(courseName);
//         }
//     }
// }

// addCourse(1,"React");

// console.log(students[0]);

// function updateGrade(studentId,subject,marks){
//     for(student of students){
//         if(student.id === studentId){
//             student.grades[subject] = marks;
//         }
//     }
// }

// updateGrade(1,"HTML",95);

// console.log(students[0]);

// function totalMarks(...marks){
//     return marks.reduce((a,b) => {return a+b},0);
// }

// console.log(totalMarks(1,2,3));
// const availableCoursesCopy = [...availableCourses];
// console.log(availableCourses);
// console.log(availableCoursesCopy);

// const {id,name,age,enrolled,courses,grades} = students[0];
// console.log(name);

//   {
//     id: 3,
//     name: "Rohan",
//     age: 19,
//     enrolled: false,
//     courses: ["HTML"],
//     grades: {
//       HTML: 75
//     }
//   }

// const [a,b,] = [10, 20, 30];
// console.log(a);
// console.log(b);

// const [,,third] = ["red", "green", "blue"];
// console.log(third);

// let x = 10, y = 20;
// [x,y] = [y,x]
// console.log(x);
// console.log(y);

// const [head,...tail] = [1, 2, 3, 4, 5];
// console.log(head);
// console.log(tail);

// const [first,second,...others] = ["apple", "banana", "orange", "grape"];
// console.log(first);
// console.log(second);
// console.log(others);
// const user = {
//   name: "Alice",
//   age: 25,
//   city: "London"
// };

// const {name:extractedName,age:extractedAge,...otherInfo} = user
// console.log(extractedName);
// console.log(extractedAge);

// var user = {
//   name: "Bob",
//   age: 30
// };

// var newName = "Robert";
// var newAge = 50;

// ({name:newName,age:newAge} = user);
// console.log(user);

// const settings = {
//   theme: "dark"
// };


// const person = {
//   name: "Emma",
//   address: {
//     city: "Paris",
//     country: "France"
//   }
// };

// const {address:{
//     city:personCity
// },...others} = person;

// console.log(personCity);

// const student = {
//   name: "John",
//   scores: [80, 90, 100]
// };

// const {scores:[
//   ,secondScore,
// ],...others} = student;

// console.log(secondScore);


// const data = {
//   user: {
//     profile: {
//       country: "India"
//     }
//   }
// };

// const{user :{
//   profile:{
//     country:extractedCountry
//   }
// }} = data;

// console.log(extractedCountry);

// const person = {
//   name: "Sarah",
//   address: {
//     city: "Berlin"
//   },
//   hobbies: ["reading", "music", "gaming"]
// };

// const{name:extractedName,address:{
//   city:extractedCity
// },hobbies:[
//   firstHobby,...others
// ]} = person;

// console.log(extractedCity);
// console.log(firstHobby);
// console.log(extractedName);

// const order = {
//   id: 123,
//   products: [
//     { name: "Laptop", price: 1000 },
//     { name: "Mouse", price: 20 }
//   ]
// };

// const{products:[
//   {
//     name:firstProductName
//   },...others
// ]} = order;

// console.log(firstProductName);
// const book = {
//   title: "JavaScript Essentials",
//   author: {
//     name: "Jane Doe",
//     age: 40
//   }
// };

// const {title:extractedTitle,author:{
//   name:extractedName
// }} = book;

// console.log(extractedName);
// console.log(extractedTitle);

// const article = {
//   title: "Destructuring",
//   tags: ["js", "es6", "frontend", "tutorial"]
// };

// const{tags:[firstTag,...otherTags]} = article;
// console.log(firstTag);
// console.log(otherTags);

// const response = {
//   user: {
//     name: "Alex",
//     roles: ["admin", "editor"]
//   },
//   preferences: {
//     theme: "dark"
//   }
// };

// const {user:{
//   name:userName,
//   roles:[firstRole]
// },preferences:{
//   theme:extractedTheme
// }} = response;

// console.log(userName);
// console.log(firstRole);
// console.log(extractedTheme);

// const apiResponse = {
//   status: "success",
//   data: {
//     users: [
//       {
//         id: 1,
//         profile: {
//           name: "Alice"
//         }
//       },
//       {
//         id: 2,
//         profile: {
//           name: "Bob"
//         }
//       }
//     ]
//   }
// };

// const{status:responseStatus,data:{
//   users:[
//     {profile:{name:firstName}},{profile:{name:secondName}}
//   ]
// }} = apiResponse;

// console.log(firstName);
// console.log(secondName);

// const company = {
//   name: "TechCorp",
//   ceo: {
//     firstName: "John",
//     lastName: "Smith"
//   },
//   offices: ["New York", "London", "Tokyo"]
// };

// const {name:companyName,ceo:{
//   firstName:ceoFirstName
// },offices:[hq,...otherOffices]} = company;

// console.log(companyName);
// console.log(ceoFirstName);
// console.log(hq);
// console.log(otherOffices);
/*
companyName
ceoFirstName
hq
otherOffices
*/

// const user = {
//   info: {
//     roles: ["admin", "editor", "reviewer"]
//   }
// };

// const {info:{roles:[,,thirdRole]}} = user;
// console.log(thirdRole);


// const user = {
//   name : "Niru"
// }

// const {name,age=23} = user;
// console.log(age);

// const arr = [1];
// const {first,second=2} = arr;
// console.log(second);

// function createUser({name = "Guest"}){
//     console.log(`Hello ${name}`);
    
// }

// createUser({name:"Niru"});
// createUser();

// const user = {
//   profile: {
//     username: "john123",
//     email:"john@email.com"
//   }
// };

// const {profile:{username:extractedUserName,email:extractedEmail = "Email not provided"}} = user;
// console.log(extractedUserName);
// console.log(extractedEmail);

/*
1: 20
2: error
3:10,2
4:Anonymous
5:error,light,dark
6:India
7:50,null
*/

// const nums = [1,2,3,4];
// const double = nums.map(num => num*2);
// console.log(double);
// const users = [
//   { name: "Alice", age: 25 },
//   { name: "Bob", age: 30 }
// ];

// const userNames = users.map(user=>user.name);
// console.log(userNames);

// const nums = [1,2,3,4];
// const doubleOdd = nums.filter(num => num%2 == 1).map(num=>num*2);
// console.log(doubleOdd);

// const users = [
//   { name: "Alice", age: 16 },
//   { name: "Bob", age: 22 },
//   { name: "Charlie", age: 18 }
// ];

// const adultNames = users.filter(user => user.age >=18).map(user => user.name);
// console.log(adultNames);

// const nums = [1,2,34,56];
// const sum = nums.reduce((sum,num)=>{
// return sum+num;
// },0);

// console.log(sum);

// const maxNum = nums.reduce((maxi,num)=>{
//   return Math.max(maxi,num);
// },100);

// console.log(maxNum)

// const fruits = ["apple", "banana", "apple", "orange", "apple"];

// const appleCount = fruits.reduce(("apple",current) =>{
// return ; 
// },0);

// const numbers = [1, 2, 3, 4, 5];
// const sumOfEvenNumberSquares = numbers.filter(num => num%2 == 0).map(num => num**2).reduce((sum,num)=>{return sum+num},0);
// console.log(sumOfEvenNumberSquares);

// const nums = [1, 2, 3, 4];
// const doubles = nums.map(num => num*2);
// console.log(doubles);

// const names = ["alice", "bob", "charlie"];
// const upperNames = names.map(name => name.toUpperCase());
// console.log(upperNames);

// const nums = [1,2,3,4,5,6];
// const odds = nums.filter(num=>num%2==1);
// console.log(odds);

// const fruits = ["apple", "banana", "kiwi", "strawberry"];
// console.log(fruits.filter(fruit => fruit.length > 5))     ;

// const nums = [1, 2, 3, 4, 5];
// console.log(nums.reduce((sum,num)=>{return sum+num},0));

// const users = [
//   { name: "Alice", age: 25 },
//   { name: "Bob", age: 30 }
// ];

// console.log(users.map(user=>user.name));

// const users = [
//   { name: "A", age: 16 },
//   { name: "B", age: 21 },
//   { name: "C", age: 18 }
// ];

// console.log(users.filter(user => user.age>=18));

// const cart = [
//   { item: "Book", price: 100 },
//   { item: "Pen", price: 20 },
//   { item: "Bag", price: 500 }
// ];

// console.log(cart.map(cartItem=>cartItem.price).reduce((priceSum,itemPrice)=>{return priceSum+itemPrice},0));

// function getVowelCount(fruit){
//     fruit = fruit.toLowerCase();
//     var ans = 0;
//     for(i=0;i<fruit.length;i++){
//       if(fruit[i] == 'a' || fruit[i] == 'e' || fruit[i] == 'i' || fruit[i] == 'o' || fruit[i] == 'u')ans++;
//     }

//     return ans;
// }

// const fruits = ["apple", "banana", "kiwi"];
// var ansArr = [];
// fruits.map(fruit=>ansArr.push({"word":fruit,"vowels":getVowelCount(fruit)}));
// console.log(ansArr);

// const score = [80, 90, 100, 70];
// console.log(score.reduce((sum,num)=>{return sum+num},0)/score.length);

// const nums = [1,2,3,4,5,6];
// console.log(nums.filter(num=>num%2==0).map(num=>num**2));

// const nums = [1,2,3,4,5];
// console.log(nums.filter(num=>num%2==1).map(num=>num**2).reduce((sum,num)=>{return sum+num},0));

const people = [
  { name: "A", age: 20 },
  { name: "B", age: 20 },
  { name: "C", age: 25 }
];

//console.log(people.reduce());

const fruits = [
  "apple",
  "banana",
  "apple",
  "orange",
  "banana",
  "apple"
]

// const newStudents = [
//   { name: "A", marks: 90 },
//   { name: "B", marks: 45 },
//   { name: "C", marks: 80 }
// ];

// var resultArr = [];

// console.log(newStudents.filter(student=>student.marks>=50).map(student=>{return {"name":student.name,"passed":true}}));

const numberList = [[1,2], [3,4], [5,6]];
// var ansArr =[];
// numberList.map(nums=>(nums.map(arri=>ansArr.push(arri))));
// console.log(ansArr);
console.log(numberList.reduce((ansArr,currArr)=> ansArr.concat(currArr),[]));
