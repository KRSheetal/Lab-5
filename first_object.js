//create an object - contains properties
//properties are name: value pairs
let user = {username: 'Sheetal', password: 'penny'}

console.log(user.username) //
console.log(user['username'])

console.log(user.password)

let whatproperty = 'password'
console.log(user[whatproperty])


let userNameProperty = 'username'
console.log(user[userNameProperty])

user.password = 'elephant'
console.log(user)

user['password'] = 'alligator'
console.log(user)

user.email = 'sheetal@gmail.com'
console.log(user)
console.log(user.email)

user.email = 'clara@gmail.com'
console.log(user.email)
console.log(user)

