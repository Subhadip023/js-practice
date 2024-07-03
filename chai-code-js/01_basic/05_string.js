const gameName2 =new String ("chakraborty")
const gameName ="chakraborty"

// console.log(gameName)
// console.log(gameName.__proto__)
// console.log(gameName.length)
// console.log(gameName.toUpperCase())
// console.log(gameName.charAt(3))
// console.log(gameName.indexOf('t'))

const newString=gameName.substring(0,4)
// console.log(newString)

const newStringBySlice=gameName.slice(0,4)// it can take negative value but substring does't 
// console.log(newStringBySlice)

const newStringWithOutTrime="       subhadip    "

// console.log(newStringWithOutTrime)
// console.log(newStringWithOutTrime.trim())


const url='https://google.com';

// console.log(url.replace('google','gmail'))
// console.log(url.includes('.com'))

let srting_slpit='subhadip-chakraborty-is-a-good-boy'
srting_slpit=srting_slpit.replaceAll('-',' ')
console.log(srting_slpit.split(' '))