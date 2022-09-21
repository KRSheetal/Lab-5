let animals = ['lion', 'tiger', 'cheetah']

console.log(animals)
console.log(animals[1])
console.log(animals[1000])

animals[3] = 'giraffe'
console.log(animals)
console.log(animals[5])

animals[1] = 'zebra'
console.log(animals[1])

animals.push('elephant') //add at the end
console.log(animals)

animals.unshift('deer') //add in the beginning
console.log(animals)

let lastAnimals = animals.pop()//remove from the end of the array
console.log(lastAnimals)
console.log(animals)

let firstAnimal = animals.shift()//remove from the beginning of the array
console.log(firstAnimal)
console.log(animals)

animals.reverse()
console.log(animals)

animals.sort()
console.log(animals)

let numberOfAnimals = animals.length
console.log(numberOfAnimals)

console.log(animals.indexOf('walrus')) //returns -1 when no output returned

if (animals.indexOf('walrus') === -1) {
    console.log('walrus is not in the array')
}

if (animals.includes('cheetah')) {
    console.log('cheetah is in the array')
}

console.log(animals.join(' * '))

animals.forEach(function (animal) {
    console.log(animal.toUpperCase())
})

//use a loop with your animals array
//can you print the length of each animal name
animals.forEach(function (animal){
    console.log(animal.length)
})
animals.push('monkey')
//can you make a new array with the lengths of each animal name?
//so for my example, ['cheetah','giraffe','lion','zebra']
//create an array [7,7,4,5]

let nameLength = []
animals.forEach(function (animal){
    let length = animal.length
    nameLength.push(length)
})

console.log(nameLength)
