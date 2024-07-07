// singleton

// object literals 

const mySymbol=Symbol('key1')

const  JsUser={
    name:'subhadip',
    'full name':'subhadip chakraborty',
    [mySymbol]:"mykey1",
    age:24,
    location:'kolkata',
    email:'subhadip240420@gmail.com',
    isLogedIn:true,
}

// console.log(JsUser.email)
// console.log(JsUser["email"])
// console.log(JsUser["full name"])
// console.log(typeof (JsUser[mySymbol]))


// JsUser.email='subhadip@gmail.com'
// console.log(JsUser)
// Object.freeze(JsUser)
// JsUser.email='subhadipchak012@gmail.com'
// console.log(JsUser)

JsUser.greeting=function(){
    console.log(`Hello from js user ${this.name}`)
}

console.log(JsUser.greeting())