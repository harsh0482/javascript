//Stack  memory
let uname = "hello"
console.log(uname);
let changename=uname
changename="hyyy"
console.log(changename)

//Heap memory

const user = {
    emailId:"xyz@gmail.com",
    age:33,
    address:"surat"
}
console.log(user);

let user2 = user
user2.age="44"
console.log(user2.age)
console.log(user.age)

