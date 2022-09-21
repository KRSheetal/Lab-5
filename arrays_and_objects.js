/* Lab: write the code requested by lines marked //TODO
You should NOT modify any of the code that's here already. Add the code requested.   */

console.log('For this lab, please write the code requested at the //TODO markers.')

/* a. Use this JavaScript object. This represents the current position of the International Space Station
at 1pm on January 12th 2018, fetched from http://api.open-notify.org/iss-now.json.
 */

let iss_location = {
    "timestamp": 1515784140,
    "iss_position":
        {
            "latitude": "49.2167",
            "longitude": "100.5363"
        },
    "message": "success"
}

console.log('__________________________') //create some space between each TODO

// TODO Extract the latitude value, and log it to the console.
console.log(iss_location.iss_position.latitude) //single line log to print(without saving, just to display)
console.log('__________________________') //create some space between each TODO

// TODO Extract the longitude value, and log it to the console.
let issLongitude = iss_location.iss_position.longitude //to save the value, use let and save it on an element
console.log(issLongitude) //display the value


/* b. Use this JavaScript object of exchange rates relative to Euros.
The properties are currency symbols, the values are the exchange rates.
Data source: http://fixer.io/
* */


let rates = {
    "AUD": 1.5417,
    "BGN": 1.9558,
    "BRL": 3.8959,
    "CAD": 1.5194
}
console.log('__________________________') //create some space between each TODO
// TODO write code to add a new property for Swiss Francs. Symbol is CHF, value is 1.1787.
rates.CHF = 1.1787 //adding to array
console.log(rates) //display the array

console.log('__________________________') //create some space between each TODO
// TODO if you had 100 Euros, write code to get the exchange rate from the object, then calculate
//      the equivalent value in Australian Dollars (AUD)

let euros = 100 //Euros
let eurosToAUD = euros * rates.AUD  //extract the AUD rate and multiply with euros
//display the converted rate
console.log(`The equivalent value of $${euros} Euros in Australian dollars is $${eurosToAUD.toFixed(2)} Australian Dollars.`)


console.log('__________________________') //create some space between each TODO
// TODO write code to identify the currency symbol that has the highest exchange rate compared to Euros.
//    In other words, identify the property with the largest value. the answer is BRL (Brazilian Real) at 3.8959 BRL to 1 Euro.
let forSort = [] //initialise an array to store the rate of each currency symbol
for (let rate in rates) { //using for loop is extract value of each property
 forSort.push(rates[rate]) //store them into forSort Array
}

//find the maximum number in the array using Math.max function
let largestValue = Math.max(...forSort.sort()) //https://www.w3docs.com/snippets/javascript/how-to-find-the-min-max-elements-in-an-array-in-javascript.html
console.log(largestValue) //display the largest rate

//find the currency symbol of the largest rate
let highestExchange
for (let rate in rates) {
    if (largestValue === rates[rate]){  //if largest rate and value of each currency symbol matches
       // console.log(rate, rates[rate])
        highestExchange = rate //save the currency symbol of that rate
    }
}
//display the answer using template
console.log(`The highest exchange rate compared to Euros is ${highestExchange} at ${largestValue}.`)

/* c. Use this JavaScript array of objects of cat owners, and their cats. Source, moderncat.com
 */

let cats_and_owners = [
    { name: "Bill Clinton", cat: "Socks" },
    { name: "Gary Oldman", cat: "Soymilk" },
    { name: "Katy Perry", cat: "Kitty Purry" },
    { name: "Snoop Dogg", cat: "Miles Davis" }
]
console.log('__________________________') //create some space between each TODO
// TODO print Gary Oldman's cat's name
let garyCat = cats_and_owners[1].cat //gary is in position [1]
console.log(garyCat) //display the name of gary's cat

console.log('__________________________') //create some space between each TODO

// TODO Taylor Swift's cat is called 'Meredith'. Write code to add this data to the array.
let newOwner= { name: "Taylor Swift", cat: "Meredith" } //define an object with above details
cats_and_owners.push(newOwner) //push the object to the array
console.log(cats_and_owners) //display the array

console.log('__________________________') //create some space between each TODO
// TODO write a loop to print each cat owner, and their cat's name, one per line. Use the forEach style.
//   Each line should have a message like "Snoop Dogg's cat is called Miles Davis"

//create a loop to extract each object from the array
 cats_and_owners.forEach(function (name,index){
     let ownerName = cats_and_owners[index].name //extract the name from each array
     let catName = cats_and_owners[index].cat //extract cat name from each array
    console.log(`${ownerName}'s cat is called ${catName}`)//display the names
 })



/* d. Use the following JSON object, describing the Nobel Prize winners in 2017.
Source http://api.nobelprize.org/v1/prize.json?year=2017
* */

// TODO print the full name of the Literature Nobel laureate.- DONE
// TODO print the ids of each of the Physics Nobel laureates. Your code should still work without modification if a laureate was added, or removed. - DONE
// TODO write code to print the names of all of the prize categories (So your output would start physics, chemistry, medicine... ).- DONE
// TODO write code to print the total number of prize categories - DONE
// TODO write code to count the total number of laureates from 2017.- DONE
//   have a good look at how the JSON is structured, and think about what loop(s) you'll need to write.


let nobel_prize_winners_2017 = {
    "prizes":[
        {
            "year":"2017",
            "category":"physics",
            "laureates":[
                {
                    "id":"941",
                    "firstname":"Rainer",
                    "surname":"Weiss",
                    "motivation":"\"for decisive contributions to the LIGO detector and the observation of gravitational waves\"",
                    "share":"2"
                },
                {
                    "id":"942",
                    "firstname":"Barry C.",
                    "surname":"Barish",
                    "motivation":"\"for decisive contributions to the LIGO detector and the observation of gravitational waves\"",
                    "share":"4"
                },
                {
                    "id":"943",
                    "firstname":"Kip S.",
                    "surname":"Thorne",
                    "motivation":"\"for decisive contributions to the LIGO detector and the observation of gravitational waves\"",
                    "share":"4"
                }
            ]
        },
        {
            "year":"2017",
            "category":"chemistry",
            "laureates":[
                {
                    "id":"944",
                    "firstname":"Jacques",
                    "surname":"Dubochet",
                    "motivation":"\"for developing cryo-electron microscopy for the high-resolution structure determination of biomolecules in solution\"",
                    "share":"3"
                },
                {
                    "id":"945",
                    "firstname":"Joachim",
                    "surname":"Frank",
                    "motivation":"\"for developing cryo-electron microscopy for the high-resolution structure determination of biomolecules in solution\"",
                    "share":"3"
                },
                {
                    "id":"946",
                    "firstname":"Richard",
                    "surname":"Henderson",
                    "motivation":"\"for developing cryo-electron microscopy for the high-resolution structure determination of biomolecules in solution\"",
                    "share":"3"
                }
            ]
        },
        {
            "year":"2017",
            "category":"medicine",
            "laureates":[
                {
                    "id":"938",
                    "firstname":"Jeffrey C.",
                    "surname":"Hall",
                    "motivation":"\"for their discoveries of molecular mechanisms controlling the circadian rhythm\"",
                    "share":"3"
                },
                {
                    "id":"939",
                    "firstname":"Michael",
                    "surname":"Rosbash",
                    "motivation":"\"for their discoveries of molecular mechanisms controlling the circadian rhythm\"",
                    "share":"3"
                },
                {
                    "id":"940",
                    "firstname":"Michael W.",
                    "surname":"Young",
                    "motivation":"\"for their discoveries of molecular mechanisms controlling the circadian rhythm\"",
                    "share":"3"
                }
            ]
        },
        {
            "year":"2017",
            "category":"literature",
            "laureates":[
                {
                    "id":"947",
                    "firstname":"Kazuo",
                    "surname":"Ishiguro",
                    "motivation":"\"who, in novels of great emotional force, has uncovered the abyss beneath our illusory sense of connection with the world\"",
                    "share":"1"
                }
            ]
        },
        {
            "year":"2017",
            "category":"peace",
            "laureates":[
                {
                    "id":"948",
                    "firstname":"International Campaign to Abolish Nuclear Weapons (ICAN)",
                    "motivation":"\"for its work to draw attention to the catastrophic humanitarian consequences of any use of nuclear weapons and for its ground-breaking efforts to achieve a treaty-based prohibition of such weapons\"",
                    "share":"1",
                    "surname":""
                }
            ]
        },
        {
            "year":"2017",
            "category":"economics",
            "laureates":[
                {
                    "id":"949",
                    "firstname":"Richard H.",
                    "surname":"Thaler",
                    "motivation":"\"for his contributions to behavioural economics\"",
                    "share":"1"
                }
            ]
        }
    ]
}
console.log('__________________________') //create some space between each TODO
// TODO print the full name of the Literature Nobel laureate.

let literatureLaureateFirstname //initialize firstname element
let literatureLaureateSurname //surname element

//loop into array to find literature category
 nobel_prize_winners_2017.prizes.forEach(function (name,index){
     if (nobel_prize_winners_2017.prizes[index].category === 'literature'){ //if true
         literatureLaureateFirstname = nobel_prize_winners_2017.prizes[index].laureates[0].firstname //extract first name
         literatureLaureateSurname = nobel_prize_winners_2017.prizes[index].laureates[0].surname //extract surname
         console.log(literatureLaureateFirstname +' ' +literatureLaureateSurname) //display full name
     }
 })
console.log('__________________________') //create some space between each TODO
/// TODO print the ids of each of the Physics Nobel laureates.
// Your code should still work without modification if a laureate was added, or removed.

let physicsLaureates
//loop into array to find literature category
nobel_prize_winners_2017.prizes.forEach(function (prizeName,prize){
    if (nobel_prize_winners_2017.prizes[prize].category === 'physics'){ //if true
        physicsLaureates = nobel_prize_winners_2017.prizes[prize].laureates //extract laureate for physics category
        // console.log(physicsLaureates[0].id)

        // Your code should still work without modification if a laureate was added, or removed.
        physicsLaureates.forEach(function(name, index){ //loop to each laureate to extract the ids
            console.log(physicsLaureates[index].id) //display the id
        })
    }
})
console.log('__________________________') //create some space between each TODO

// TODO write code to print the names of all of the prize categories (So your output would start physics, chemistry, medicine... ).

let categoryList = [] //initialize an array to save categories
//loop through to extract the category for each prize
nobel_prize_winners_2017.prizes.forEach(function (prizeName, prize){
    categoryList.push(nobel_prize_winners_2017.prizes[prize].category) //append the category to categoryList array
    console.log(nobel_prize_winners_2017.prizes[prize].category) //display category
})

console.log('__________________________') //create some space between each TODO
// TODO write code to print the total number of prize categories
console.log(`The total number of prize categories are ${categoryList.length}.`) //display the length of the categoryList array

console.log('__________________________') //create some space between each TODO
// TODO write code to count the total number of laureates from 2017.
//   have a good look at how the JSON is structured, and think about what loop(s) you'll need to write.

let totalLaureated2017 = [] //define an array element to store laureates
nobel_prize_winners_2017.prizes.forEach(function (prizeName, prize){ //loop to count laureates
    if(nobel_prize_winners_2017.prizes[prize].year === "2017") { //confirm if year is 2017
        nobel_prize_winners_2017.prizes[prize].laureates.forEach(function (){ //loop through each laureate
            totalLaureated2017.push(nobel_prize_winners_2017.prizes[prize].laureates) //append to totalLaureate array
        })
    }
})
//display the total number of laureates from 2017
console.log(`The total number of laureates from 2017 are ${totalLaureated2017.length}.`)