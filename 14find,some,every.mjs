//find
// let input =[1,2,3,4]
// let output = input.find((value,i)=>{
//     if (value === 3){
//         return true
//     }else{
//         return false
//     }
// })
// console.log(output)
//the output of find will be one of the elements of input or undefined

// every
// the output of every is either true or false 
// the output of every is true if all elements return true
    // let input = [3,4,9]
    // let output = input.every((value,i)=>{
    //     if (value === 3){
    //         return true
    //     }else{
    //         return false
    //     }
    // })
    // console.log(output)


    // let input = [1,18,19,20,11]
    // let output = input.every((value,i)=>{
    //     if(value>=18){
    //         return true
    //     }else{
    //         return false
    //     }
    // })
    // console.log(output)

    // function in every
    // let output = (input)=>{
    //     let out = input.every((value,i)=>{
    //         if(value>=18){
    //             return true
    //         }else{
    //             return false
    //         }
    //     })
    //     return out
    // }
    // let _output = output ([18,1,20])
    // console.log(_output)



//some
//the output of some is either true or false , some will return true if one of the elements return true
// let input =[3,4,9]
// let output = input.some((value,i)=>{
//     if (value === 3){
//         return true
//     }else{
//         return false
//     }
// })
// console.log(output)

// let output = (input)=>{
//         let out = input.some((value,i)=>{
//             if(value>=18){
//                 return true
//             }else{
//                 return false
//             }
//         })
//         return out
//     }
//     let _output = output ([18,1,20,30])
//     console.log(_output)

// QUESTION 
//1)check weather we have all  ages greater than 17 form the given input [1,2,20,30,40]
// let input = (input)=>{
//     let output=input.every((value,i)=>{
//         if (value>=17){
//             return true
//         }else{
//             return false
//         }
//     })
//     return output
// }
// let _output = input([1,22,20,30,40])
// console.log(_output)

// 2)check  weather we have nitan in the list ["utshab","nitan","ram","hari"]
// let input = (input)=>{
//     let output= input.some((value,i)=>{
//         if (value === "nitan"){
//             return true
//         }else{
//             return false
//         }
//     })
//     return output
// }
// let _output= input(["utshab","ram","nitan","hari"])
// console.log(_output)

//3)check weather we have all even number in the list [2,4,9,6]
// let number = (number)=>{
//     let number1 = number.every((value,i)=>{
//         if (value%2===0){
//             return true
//         }else{
//             return false
//         }
//     })
//     return number1
// }
// let number11= number([2,4,9,6])
// console.log(number11)

//4)check weather all students get pass mark from the list [ 40,30,80] here pass marks is 40
// let marks = (passmarks)=>{
//     let passedmark = passmarks.every((value,i)=>{
//         if (value>=40){
//             return true
//         }else{
//             return false
//         }
//     })
//     return passedmark
// }
// let passingmark = marks([ 40,30,80])
// console.log(passingmark)

//6) check weather a person has smoking habit   ["smoking", "drinking", "biting nails"]
// let input = (inputs)=>{
//     let output = inputs.some((value,i)=>{
//         if(value === "smoking"){
//             return true
//         }else{
//             return false
//         }
//     })
//     return output

// }
// let habit = input(["smoking", "drinking", "biting nails"])
// console.log(habit)

//5)using some method find weather we have Bearer in the the string "Bearer token"
// let input = " bearer token"
// let inputArr = input.split(" ")
//  let hasBearer = inputArr.some((value, i)=>{
//     if (value === "bearer"){
//         return true
//     }else{
//         return false
//     }
//  })
//  console.log(hasBearer)