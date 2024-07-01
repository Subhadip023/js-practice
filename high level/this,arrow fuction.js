const user={
    userName:"subhadip",
    price:200,
     wellcomeMessage:function( ){
        console.log(`${this.userName} ,welcome to webside`)
        // console.log(this);
     }
}

user.wellcomeMessage()
user.userName="sarbik"
user.wellcomeMessage()
console.log(this)