/*
Data types are 2 types based on data set on memory store and access (call by value or call by reference )

1.Primitive datatype
    String ,Number ,Boolean ,null ,undefined ,Symbol, BigInt 


2.Non Primitive (reference)    
    Array,Objects,Function 

js is dynamically Typed     
*/

// const score = 100 

const id =Symbol('123')
const anotherId=Symbol('123')

const bigNumber=4356453543645364354634637n
// console.log(typeof bigNumber)

// console.log(id,anotherId)
// console.log(id==anotherId)

const heros=["shaktiman","naagraj","doga"]

let myObj={
    name:"subhadip",
    age:24,
}
// https://262.ecma-international.org/5.1/#sec-11.4.3