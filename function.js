function shout(text){
    return text.toUpperCase() + '!!!'
}

console.log(shout('hello world'))
let message = shout('hello web programmers')
console.log(message)

function f_to_c(f, decimalPlaces) {
    let celsius = (f - 32) * 5 / 9
    if (decimalPlaces) { //undefined values are considered to be falsed
        return celsius.toFixed(decimalPlaces)
    } else {
        return celsius
    }
}
let todayTemp = 75
todayCelsius = f_to_c(todayTemp,3)
console.log(todayCelsius)