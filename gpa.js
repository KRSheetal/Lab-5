function validgpa(gpa) {
    //gpa is between 0 and 4
    return (gpa >= 0 && gpa <=4) 

}


console.log(validgpa('4'))
console.log(validgpa('-1'))
console.log(validgpa('6'))
console.log(validgpa('2'))
console.log(validgpa('10'))
