// let sum =()=>{
//     console.log("hello")

// import { age } from "./abc.mjs"

// }
// sum()

// let product =(a,b) => {
//     let product=a*b
//     console.log(product)

// }
// product(2,3)
//1. {make a arrow function  that takes input as [1,3,4,5] 
    // it must return [3,9,8,15] here odd number is multiplied by 3 and even number is multiplied by 2}
    
    // let input=[1,3,4,5]
    // let _input=input.map((value,i)=>{
    //     if(value%2===0){
    //         return value *2
    //     }else{
    //         return value *3
    //     }
    //     return _input
    
    // })
    // console.log(_input)
     
    
    // let prac =(inputAr1)=>{
    //     let outputAr1 = inputAr1.map((value, i)=>{
    //         if (value% 2 === 0){
    //             return value *2
    //         }else{
    //             return value *3
    //         }
    //     })
    //     return outputAr1
    // }
    
    // 2. {Make an array of numbers that are doubles of the first array eg input [1,2,3,4] output must be [2,4,6,8]}
    // let input =(arr)=>{
    //     let output=arr.map((value,i)=>{
    //         return value*2
    //     })
    //     return output
    // }
    // let output1=input([1,2,3,4])
    // console.log(output1)
    
    // 3. { make a arrow function  that takes input as [1,2,3,4] it must return [2,0,6,0] 
    //here odd index is multiplied by 0 and even index is multiplied by 2}
    // let prac = (inputAr1)=>{
    //     let outputAr1 = inputAr1.map((value , i)=>{
    //         if (i %2===0){
    //             return value *2
    //         }else{
    //             return value*0
    //         }
    //     })
    //     return outputAr1
    // }
    // let outputAr1 = prac([1,2,3,4])
    // console.log(outputAr1)
    
    // 4.{make a arrow function that takes a input and return its upperCase version}
    //    let name =()=>{
    //     let output ='sandesh is my name'
    //     return output.toUpperCase()
    // }
    // console.log(name())

    
    // 5.{make a arrow function that takes a input and return its lowerCase version}
//     let name=()=>{
//     let output ='SANDESH'
//     return output.toLowerCase()


// }
// console.log(name())
    
    // 6. {arrow function that takes a input and return another string which is a trim version (remove both start and end space)}
    // let input =()=>{
    //     let output='   sandesh'
    //     return output.trim()
    // }
    // console.log(input())
    
    // 7. make a arrow function that takes a input true if the string starts with Bearear else return false
    // let input=()=>{
    //     let output="bearer"
    //     return output.startsWith("de")
    // }
    // console.log(input())
    





    // 8.make a arrow function that takse a sentence  and return another sentence where all nitan is converted to ram
    
    // let arrow=['n','i','t','a','n']
    // arrow.shift()
    // arrow.shift()
    // arrow.shift()
    // arrow.shift()
    // arrow.shift()
    // console.log(arrow)
    // arrow.unshift('r')
    // arrow.unshift('a')
    // arrow.unshift('m')
    // console.log(arrow)
    
    
    // 9. make a arrow function that takes input and return true if it Contain admin or superAdmin
    
    
    
    
    // 10. make a arrow function that takes input as "    niTAn   " and return   "nitan"
    // let input='  niTAn   '
    // let _input= input.trim().toLowerCase()
    // console.log(_input)
    
    // 11. make a arrow function that takes a sentence and return total number of letter in that sencence (using string.length)
    
    // let input="my name is sandesh"
    // let _input=input.length
    // console.log(_input)
    
    
    // 12. make a arrow function that takes input as word "my name is nitan" and it must conver the input to camelCase like "My Name Is Nitan"
    // let input='my name is nitan'
    // let _input=convertToCamelCase(input)
    // console.log(_input)
      
     // practise question homework

     //1.make a arrow function that take input as array and return , output in ascneding order
    //        let number =()=>{
    //     let output =["1","8","5","3","9"]
    //     return output.sort()
    // }
    // console.log(number())

    // 2.make arrow function that take input as ARRAY and return , output in descending order.
    // let array =()=>{
    //     let output=["sa","sap","sam"]
    //     return output. sort()
    // }
    // console.log(array)

    // 3. make a arrow function that take input as [1,2,3] and return [1,8,3] here ar[1] is changed from 2 to 8
    
    // 4. make a arrow function which takes input as [1,2,3] and produce output as "1,2,3"
    //   let func=(inputArray)=>{cl
    //     return array 
    //   }let string =func([1,2,3])
    //   console.log(string)

    //   // 5. make a arrow function that take input as [1,2,3] , and return [1,2,3,4] by using push methode

    //   let funct=(input)=>{
    //     input.push(4)
    //     return input
    //   }
    //   let output=funct([1,2,3,4])
    //   console.log(result)
      
      // 6.make a arrow function that takes input as array of number and return the third largest number
    //   let thirdLargest=(output)=>{
    //     let input = output.sort()
    //     let third=input.reverse()
    //     console.log(third)
    //     return 
    //     console.log(third[2])
    //   }thirdLargest ([111,444,333,666,456])

    // 7. [1,2,3] => [3,6,9]

//  let array=(arr)=>{
//     let output=arr.map((value,i)=>{
//         return value*3

//     })
//     return output
//  }
//  let _output=array([1,2,3])
//  console.log(_output)

// 8. [1,2,3]=>[11,12,13]

// let inputArray=(arr)=>{
//     let output=arr.map((value,i)=>{
//         if(i===0){
//             return value+10
//         }
//         else if(i===1){
//             return value+10
//         }
//         else if(i===2){
//             return value+10
//         }

//     })
//     return output

// }
// let _output=inputArray([1,2,3])
// console.log(_output)

// 9.["my","name","is"] => ["MY","NAME","IS"]

// let inputArray=(arr)=>{
//     let output=arr.map((value,i)=>{
//         if(i===0){
//             return value.toUpperCase()
//         }
//         else if(i===1){
//             return value.toUpperCase()
//         }
//         else if(i===2){
//             return value.toUpperCase()
//         }

//     })
//     return output
// }
// let result=inputArray(["my","name","is"])
// console.log(result)


// 10.["my","name","is"] => ["MYN","NAMEN","ISN"]

// let inputArray=(arr)=>{
//         let output=arr.map((value,i)=>{
//             if(i===0){
//                 return value.toUpperCase()+('N')
//             }
//             else if(i===1){
//                 return value.toUpperCase()+('N')
//             }
//             else if(i===2){
//                 return value.toUpperCase()+('N')
//             }
//         })
//         return output
//     }
//     let result=inputArray(["my","name","is"])
//     console.log(result)

// 11. "my name is nitan" => "MYN NAMEN ISN NITANN"

// let input=(str)=>{
//     let arr=str.split(' ')
    //console.log(arr)

//     let _input=arr.map((value,i)=>{
//         if(value){
//             return str.toUpperCase()
//         }
        // })
//     return _input.join()
// }
// let _output=input("my name is nitan")
// console.log(_output)

// 12. "my name is nitan" => "My Name Is Nitan"



// 13. make a arrow function  that takes input as [1,3,4,5] 
//it must return [3,9,8,15] here odd number is multiplied by 3 and even number is multiplied by 2

// let func=(arr)=>{
//     let output=arr.map((value,i)=>{
//         if(value%2==0){
//             return value*2
//         }
//         else if(value%2!==0){
//             return value*3
//         }

//     }) 
//     return output
// }
// let _output=func([1,3,4,5])
// console.log(_output)

// 14.Make an array of numbers that are doubles of the first array eg input [1,2,3,4] output must be [2,4,6,8]

// let func=(arr)=>{
//         let output=arr.map((value,i)=>{
//             if(value){
//                 return value*2
//             }
//             else{
//             return value
//             }
    
//         }) 
//         return output
//     }
//     let _output=func([1,2,3,4])
//     console.log(_output)

// 15.make a arrow function  that takes input as [1,2,3,4] 
//it must return [2,0,6,0] here odd index is multiplied by 0 and even index is multiplied by 2

// let func=(arr)=>{
//         let output=arr.map((value,i)=>{
//             if(i%2==0){
//                 return value*2
//             }
//             else if(i%2!==0){
//                 return value*0
//             }
    
//         }) 
//         return output
//     }
//     let _output=func([1,2,3,4])
//     console.log(_output)

// 16. using includes method find weather we have Bearer in the the string "Bearer token"

// let input=(str)=>{
//     let _input=str.includes("Bearer")
//     return _input

// }
// let _output=input("Bearer token")
// console.log(_output)

// 17. lets suppose we have roles list as ["admin", "superAdmin", "customer"] check weather the array has admin

// let input=(arr)=>{
//     let _input=arr.includes("admin")
//     return _input
// }
// console.log(input(["admin", "superAdmin", "customer"]))


 
    

