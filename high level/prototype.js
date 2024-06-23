// output the property of array

Array.prototype.extraProperty="subhadip"

const myArray=[1,2,3,4,5]

for(let item in myArray){
    if (myArray.hasOwnProperty(item)) {
        console.log(item)
    }
}