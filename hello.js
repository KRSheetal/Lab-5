console.log('Hello World!')

//Three ways to create variables
let color = 'blue' //let is choice for variables
var size = 'medium' //not recommended var, var's scope is wider
const language = 'JavaScript' //can't change this value
//language = 'C#' this is an error

let quantity = 5
let distance = 4.5

let text = 'Hello World'
let message = "Hi Programmers"

console.log('There are '+quantity +' programmers')

let todayTemp = 75

console.log("Today's temperature is "+todayTemp+"F")

let tempC = (todayTemp -32) * 5/9
console.log("Today's temperature is "+tempC.toFixed(2)+"C")
console.log(`Today's temperature is ${tempC.toFixed(2)}C 
which is ${todayTemp}F`)

//Can you use these variables and a template string to console.log the message
//'This class is ITEC 2560 Web Programming'

let className = 'Web Programming'
let classCode = 2560
let department= 'itec'
console.log(`This class is ${department.toUpperCase()} ${classCode} ${className}`)

