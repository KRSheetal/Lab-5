//String Library

let text = 'Hello World!'
let stringLength = text.toUpperCase() //These are methods - convert to uppercase
let whisper = text.toLowerCase() //And to lowercase
let whereIsW = text.indexOf('w') //Index of first matching character or -1 if not found
let whereIsZ = text.indexOf('z') //Index of first matching character or -1 if not found
let whisperAndShout = whisper.concat(shout) //Join strings together
let replace0 = text.replace('o', '0') //Replace the first instance of first thing with second thing
//see reference for more info on this, can also do global
//and more complex replacements with regular expressions
let replaceAll0 = text.replace(/o/g, '0')//replace the all instance of first things with second thing
let removeWhitespace = text.trim() //remove spaces, tabs, newlines etc. from both ends of the string

console.log(stringLength,shout, whisper, whereIsW, whereIsZ,whisperAndShout, replace0, replaceAll0, removeWhitespace)