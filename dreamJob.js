//Create a user object for your information in your dream job:
//name, email, password, contact, roles

var user = {
    name: 'Sheetal',
    email: 'sheetal@gmail.com',
    password: 'diamond',
    contact: { phone: '720-589-286', zipcode: 55446},
    roles: ['QA']}
console.log(user)

//In code, add attribute for your salary, as a number
user.salary ='100'
console.log(user)

//In code, add "server admin" to your roles
user.roles.push('server admin')
console.log(user)
//Add the office location, e.g. (location: "Minneapolis") to the contact object

user.contact.location = 'Minneapolis'

console.log(user)