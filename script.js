// let name = prompt("Enter your name:");
// console.log("Hello, " + name + "!");

// console.time("timer");
// // Code block to measure time
// for (let i = 0; i < 1000000; i++) {
//     // Some operation
// }
// console.timeEnd("timer");
//
// let data = [
//     { name: "John", age: 30 },
//     { name: "Jane", age: 25 },
//     { name: "Bob", age: 40 }
// ];
// console.table(data);
//
// let fruits = ['apple', 'banana', 'apple', 'orange', 'apple']
// fruits.forEach(fruit => {
//     console.log(fruit)
// });
//
// console.group("Group 1");
// console.log("Message 1");
// console.log("Message 2");
// console.groupEnd();
//
// console.group("Group 2");
// console.log("Message 3");
// console.log("Message 4");
// console.groupEnd();

// console.log("%cStyled message", "color: blue; font-weight: bold;");

// Variables
// var x = 10;
// let y = 'Hello';
// const PI = 3.14;
//
// // Data Types
// let num = 10; // Number
// let str = 'Hello'; // String
// let bool = true; // Boolean
// let arr = [1, 2, 3]; // Array
// let obj = { name: 'John', age: 30 }; // Object
// let n = null; // Null
// let u = undefined; // Undefined

// If...Else

// let age = 17;
// if (age >= 18) {
//     console.log('You are an adult');
// } else {
//     console.log('You are a minor');
// }
// let day = 'Monday';
// switch (day) {
//     case 'Monday':
//         console.log('Today is Monday');
//         break;
//     case 'Tuesday':
//         console.log('Today is Tuesday');
//         break;
//     default:
//         console.log('Unknown day')
// }
//
// // For Loop
// for (let i = 0; i < 5; i++) {
//     console.log(i);
// }
//
// // While Loop
// let i = 0;
// while (i < 5) {
//     console.log(i);
//     i++;
// }
// functions

// function greet(name) {
//     console.log('Hello, ' + name);
// }
// greet('John');
//
// console.log()
//
// let add = function (a, b, c){
//     return a + b * c
// }
// console.log(add(10, 50, 8))
//
// let multiply = (a, b, c) => a + b * c;
// console.log(multiply(470, 50, 9))

// Array Declaration

// let fruits = ['Apple', 'Banana', 'Orange'];
//
// console.log(fruits[0])
//
// fruits.forEach(fruit => console.log(fruit))
// console.log()
//
// fruits.push('Mango')
// fruits.forEach(fruit => console.log(fruit))

// Object Declaration

// let person = {
//     name: 'John',
//     email: 'John@gmail.com',
//     address: {
//         city: 'New York',
//         country: 'USA'
//     },
//     age: 38
// }
//
// console.log(person.name)
// console.log(person.email)
// console.log(person.address.city)
// console.log(person.address.country)
// person.surname = "Smite"
// console.log(person.surname)

// // Concatenation
// let firstName = 'John';
// let lastName = 'Doe';
// let fullName = firstName + ' ' + lastName;
// console.log(fullName); // John Doe
//
// // String Length
// let str = 'Hello';
// console.log(str.length); // 5
//
// // Substring
// console.log(str.substring(0, 3)); // Hel

//Higher-Order Functions

// function operateOnArray(arr, callback){
//     return arr.map(callback);
// }
//
// const numbers = [1, 2, 3, 4, 5, 568]
// const squaredNumbers = operateOnArray(numbers, x => x * x)
// console.log(squaredNumbers);

// Example of asynchronous code using Promises

// function fetchData() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve('Data fetched successfully');
//         }, 3000)
//     });
// }
//
// fetchData().then(data => {
//     console.log(data);
// })
//     .catch(error => {
//         console.error('Error fetching data: ', error)
//     });

// Example of closure

// function outerFunction() {
//     let outerVariable = 'I am from other function';
//     function innerFunction(){
//         console.log(outerVariable)
//     }
//
//     return innerFunction;
// }
//
// const innerFunc = outerFunction();
// innerFunc();

// Example of ES6 class

// class Person {
//     constructor(name, age) {
//         this.name = name;
//         this.age = age;
//     }
//
//     greet() {
//         console.log(`Hello, my name is ${this.name} and I'm ${this.age} years old.`);
//     }
// }
//
// const john = new Person('John', 30);
// const nick = new Person('Nick', 32);
// john.greet();
// nick.greet();

//  Module System (ES6 Modules):

// Example of ES6 module exporting and importing
// math.js (Exporting module)

// export function add(a, b){
//     return a + b;
// }
//  import {
//     add
//  } from './math.js'
//
// console.log(add(5, 3))

//
