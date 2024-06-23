const myNum=[1,2,3,4,5,6,7,8,9,10]
 
// let newNums=[]

// myNum.forEach((num)=>{
//     if (num>4) {
//         newNums.push(num)
//     }
// })

// let newNums=myNum.filter((num)=>num>4)
// const newNums=myNum.map((n)=>n+10)
// const newNums=myNum
//                     .map((n)=>n*10)
//                     .map((n)=>n+1)
//                     .filter((n)=>n>=40)

const myTotal=myNum.reduce((acc,curval)=>(acc+curval),0)


console.log(myTotal)
 
