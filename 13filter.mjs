// let input =[1,2,3,4]
// let outputAr1 = input.filter((value,i)=>{
//     if (value===1){
//         return true
//     }else if(value===4){
//         return true
//     }else{
//         return false
//     }
// })
// console.log(outputAr1)


// let inputs =[1,2,3,4,9,10,11,12]
// let outputs=inputs.filter((value,i)=>{
//     if (value %2===0){
//         return true
//     }else{
//         return false
//     }
// })
// console.log(outputs)

// let input=[-2,-3,2,5,6]
// let output=input.filter((value,i)=>{
//     if(value>0){
//         return true
//     }else{
//         return false
//     }
// })
// console.log(output)

//filter string
// let input=["a",1,"b",3]
// let output=input.filter((value,i)=>{
//     if(typeof (value) ==="string"){
//         return true
//     }else{
//         return false
//     }
// })
// console.log(output)

// filter greaterthan 17
// let input=["1","3","31","17","18","22"]
// let output=input.filter((value,i)=>{
//     if(value>17){
//         return true
//     }else{
//         return false
//     }
// })
// console.log(output)

//filter ["nitan", "ram","hari"] = ["nitan", "hari" ]  (fiter those string whose length is greater or equal to 4)
// let input=(String)=>{
// let output=String.filter((value,i)=>{
//     if (value.length>=4){
//         return true
//     }else{
//         return false
//     }
// })
// return output
// }
// let output=input(["nitan","rita","ram","cha"])
// console.log(output)

// filter only truthy value
// let input=(inputArr)=>{
//     let output=inputArr.filter((value,i)=>{
//         if(value){
//             return true
//         }else{
//             return false
//         }
//     })
//     return output
// }
// let output=input([1,2,3,0,false])
// console.log(output)