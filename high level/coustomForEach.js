
Array.prototype.customForEachOne=function(callback){
    for(let i=0;i<this.length;i++){
        callback(this[i],i,this)
    }
}

const myArray=[1,2,3,4,5]



// Example usage:
myArray.customForEachOne((element, index, array) => {
    console.log('Element:', element, 'Index:', index, 'Array:', array);
});