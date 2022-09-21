let user = {
    username: 'clara',
    password: 'zebra'
}
for (let name in user) {
    console.log(name, user[name])
}

console.log(user.username)
console.log(user['username'])