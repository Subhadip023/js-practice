// arrays 

const myArray=[0,1,2,3,4,5];
const myHeros=['iron man','captain','thor','hulk']
const myArray2=new Array(20,30,40,50)
// console.log(myArray[0])
// console.log(myHeros[0])
// console.log(myArray2[0])

// Arrray methods 

// myArray.push(6)
// myArray.push(7)
// myArray.pop()

// myArray.unshift(9) //insert at arrray start reverse of pop 

// myArray.shift() // remove the first element in the array




// console.log(myArray)
// console.log(myArray.includes(9))
// console.log(myArray.indexOf(3))


const newArray=myArray.join()


// console.log(newArray)


// slice and splice

console.log('A -> '+myArray)
const myn1=myArray.slice(1,3);// it does not manipulate the originak array 
console.log(myn1)
console.log('B -> '+myArray)




const myn2=myArray.splice(1,3); // it manipulate original array [remove the last splice elements for  the ayyay ]
console.log(myn2)
console.log('C -> '+myArray)