//any thing that perform operation
// console.log(1+1)
// console.log(3*4)
// console.log(8/2)
// console.log(4-4)
// console.log(7%3)
//console.log(1+1)
//console.log("a"+'b')//[concatenation]
//console.log("1+1")
//console.log(1+"1")//if conflict between number and string occurs,string wins.
//In js operation are done for two value at a time 
// we canot use double quote in double quote and we canot use single quote in single quote.
//let name =`sandesh`;
//let surname=`phuyal`;
//let fullname=`name surname`;

import { age, sum } from "./abc.mjs"


// let name="sandesh"
// let surName="phuyal"
// let fullName = `${name} ${surname}`;
// console.log(fullName)

// let name="sandesh"
// let surname="phuyal"
// let age="22"
// let address="bhaktapur"

// let mydetails=`my name is ${name} and surname is ${surname} i am ${age} i live in ${address}`
// console.log(mydetails)

//camel case convention
// console.log(1>2)//false
// console.log(1<2)//true
// console.log(1<=1)//true
// console.log(1 >=1)//true
// console.log(1>=2)//false
// console.log(1 === 2)//false
// console.log(1=== 1)//true
// console.log("sandesh" === "sandesh")// true
// console.log("SANDESH" === "PHUYAL")//FALSE
// console.log(1 !== 3)//true
// console.log("RAM" !== "HARI")//TRUE
// console.log("RAM"!== "RAM")//FALSE

//let a ="nitan"
// it gives the type of data
//console.log(typeof(a))// type of provides type of data
// let age ="12"
// let age1 =Number (age)
// console.log(age1)
// console.log(typeof(age1))
 
// let isMarried = true
// let isMarriedString = String(isMarried)
// console.log(isMarriedString)

// if else 
// ()=>parenthesis
//{}=>block
//[]=>array
// let name ="sandesh"
// if (name === "sandesh")
// {
//     console.log("MY NAME IS SANDESH")
// }else{
//     console.log("MY NAME IS NOT SANDESH")
// }

//make a arrow function name is18 pass a value ,the function must return true if the given age is 18 otherwise return false
// let value ="18"
// if(value === "18"){
//     console.log("true")
// }else{
//     console.log("false")
// }


//make a arrow function named isGreaterThan18 , pass a value , the function must return true if the given age is greater or equals to 18 otherwise false
// let age=17
// if(age >= 18){
//     console.log("true")
// }else{
//     console.log("false")
// }


//make a arrow function that take a number and return you can enter room only if the enter number is less than 18 else you can not enter
// let number ="19"
// if(number==="18"){
//     console.log("enter room")
// }else{
//     console.log("canot enter room ")
// }


// let age =101
// if(age=== 10){
//     console.log("he is 10")
// }
// else if(age === 15){
//     console.log("he is 15")
// }
// else if(age===100){
//     console.log("he is 100")
// }
// else if(age === 90){
//     console.log("he is 90")
// }else{
//     console.log("he is not in the list")
// }


// make a arrow function named isEven , pass a value, that retrun true if the given number is even else return false
// let number = 13
// if(number === 11){
//     console.log("it is odd")
// }else{
//     console.log("it even")
// }


//if age is 25,  console your ticket is free
// if age is 26,  console your ticket cost 100
// if age is 27,  console your ticket cost 200
// if age is other than 25,26,27 console you are not allowed
// let age =27
// if(age===25){
//     console.log("your ticket is free")
// }else if(age === 26){
//     console.log("your ticket cost 100")
// }else if(age === 27){
//     console.log("your ticket cost 200")
// }else{
//     console.log("you are not allowed")
// }


// if age is greater than 1 and lessthan or equals to 18 (your ticket is free )
// if age is greater than 18 and lessthan or equals to 25(your ticket cost 100)
// greater tha 25 (your cot is 200)
// let age = 200
// if(age >=1 && age <= 17){
//     console.log("your ticket is free")
// }else if (age >= 1 && age <= 25){
//     console.log("your ticket cost 100")
// }else{
//     console.log("your ticket is 200")
// }


//take 3 into and find its average
// let a=3
// let b=3
// let c=3
// let avg = (a+b+c)/3
// console.log(avg)
// fff take one input as number and return "category1" for number range from 1 to10,  return "category2" for number range from 11 to 20, return "category3" for number range form 21 to 30

//if number>=3 console i am greater or equal to 3
// if number ===3 console i am 3
// if number<3 console i am less than3
// else show i am other
// let number=3
// if (number >3){
//     console.log("i am greater or equals to 3")
// }else if(number === 3){
//     console.log("i am 3")
// }else if(number<3){
//     console.log("i am less than 3")
// }else{
//     console.log("i am other")
// }

// let sum=function(){
//     console.log("i m function")
// }
// sum()

// let myName = function(){
//     console.log("my name is sandesh")
// }
// myName()

// let add = function (num1,num2){
// let sum = num1+num2
// console.log(sum)
// }
// add(1,3)

// 

//  let division = function(num1,num2){
//     let divide = num1/num2
//     console.log(divide)
//  }
//  division(4,2)

// default value function
// let learnDefaultValue = function (a = 22 , b = 33 , c = 99){
//     console.log(a)
//     console.log(b)
//     console.log(c)
// }
// learnDefaultValue()

// let fun = function(){
//     console.log("aa")
//     return 5 
//     console.log("its not printed coz of return")
// }
// let c = fun()
// console.log("sandesh")
// console.log(c)
// function should be called at last

// let name = 'sandesh'
// console.log(name)
//  console.log(age)

//  let _sum = sum(1,2)
//  console.log(_sum)

// let name="  saNdesH  "
// let nameUpperCase = name.toUpperCase()
// console.log(nameUpperCase)
 

//  let nameLowerCase = name.toLowerCase()
//  console.log(nameLowerCase)


// let trimStartVersion = name.trimStart()
// console.log(trimStartVersion)

// let trimEndVersion = name.trimEnd()
// console.log(trimEndVersion)

// let includes = name.includes("sa")
// console.log(includes)

// let startsWith = name.startsWith("p")
// console.log(startsWith)

// let endswith = name.endsWith("pp")
// console.log(endswith)

// let length = name.length
// console.log(length)

