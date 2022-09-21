//pre-requisites for android programming - c# Java

let takenCSharp = false
let takenJava = true

if (takenJava || takenCSharp) {
    console.log('You meet the pre-requisites for Android')
} else {
    console.log('You must take C# or Java')
}


//your turn! to be a senator, there are 3 requirements:
//you must be at least 30 years old
//you have to have been a US citizen for 9 or more years
//you must live in the state you want to represent

let age = 35
let usCitizenTime = 35
let stateOfResidence = 'Wisconsin'
let stateWantToRepresent = 'Minnesota'

if (age >= 30 && usCitizenTime >= 9 && stateWantToRepresent === stateOfResidence) {
    console.log('You are eligible to be a senator')
} else {
    console.log('Sorry, You are not eligible to be a senator')
}


//falsy values - undefined, null, empty lists, empty objects, 0, false
if ('' === 0) {
    console.log('the same!')
} else {
    console.log('not the same!')
}
