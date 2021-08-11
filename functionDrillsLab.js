//problem 1

function helloWorld() {
  console.log('Hello, World!')
}

helloWorld()

//problem 2

function printName(name) {
  console.log(name)
}

printName('john')

//problem 3

function greeting(name) {
  console.log(`hello, ${name}`)
}

greeting('Sam')

//problem 4

function add(num1, num2) {
  return num1 + num2
}
let sum = add(2,3)

console.log(sum)

//problem 5
function nameCheck(name) {
  if (name === "Steven" || name === 'steven') {
    return "What's up Steven?"
  } else if (name === 'Bryan' || name === 'bryan') {
    return "Hey Bryan!"
  } else {
    return `Cool name, ${name}`
  }
}
nameCheck(`bryan`)

//problem 6

function favoriteColorFinder(color) {
  if (color === `Red` || color === `red`) {
    return `Red is a great color`
  } else if (color === `Green ` || color === `green`) {
    return `Green is a solid favorite color`
  } else if (color === `Black` || color === `black`) {
    return `So trendy!`
  } else {
    return `You need to reevaluate your favorite color choice...`
  }
}

let colorRating = favoriteColorFinder(`green`)

console.log(colorRating)

//problem 7
let namesArr = ['Cameron', 'Riley', 'Eric', 'Brenna', 'Karl']

function printAllNames(names) {
  for (let i = 0; i < names.length; i++) {
    console.log(names[i])
  }
}

printAllNames(namesArr)

//problem 8

function thatsOdd(num) {
  if (num % 2 === 0) {
    return `Thats not odd!`
  } else {
    return `That is odd indeed!`
  }
}

let oddChecker = thatsOdd(3)

console.log(oddChecker)

//problem 9
let bigOrSmallArray = [1, 101, 102, 2, 103, 4, 5, 6, 107]

function bigOrSmall(arr) {
  let answers = []
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 100) {
    answers.push("big")
    } else {
    answers.push("small")
    }
  }
  return answers
}

let arrayEvaluator = bigOrSmall(bigOrSmallArray)

console.log(arrayEvaluator)

//problem 10

let contestants = ['Katniss', 'Peeta', 'Fox-face', 'Glimmer', 'Cato', 'Rue', 'Thresh', 'Clove', 'Marvel']

let loser = 'Glimmer'

function theEliminator(contestants, loser) {
  for (i = 0; i < contestants.length; i++) {
    if (contestants[i] == loser) {
      contestants.splice(i, 1)
    }
  }
  return contestants
}

let finalist = theEliminator(contestants, loser)

console.log(finalist)

//problem 11

let sampleString = "Hi, my name is Kylo."

function makeUppercase(string) {
  console.log(string.toUpperCase())
}
makeUppercase(sampleString)

//problem 12


let money = 8

function buyFrogs(num) {
  let totalFrogs = 0
  totalFrogs = num / 3    
  return totalFrogs   //or return Math.floor(totalFrogs)
}

buyFrogs(money)


// problem 13

function buyFrogs2(num) {
  let totalFrogs2 = 0
  totalFrogs2 = num / 3    
  return Math.floor(totalFrogs2)
}

buyFrogs2(money)

// problem 14

let sampleArray = [0,1,2,3,4,7,5,6,8,9]

function isAscending(arr) {
  let arrayAscending = true
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < arr[i - 1]) {
      arrayAscending = false

    }
  }
  return arrayAscending
}

let arrayIsAscending = isAscending(sampleArray)

console.log(arrayIsAscending)

//problem 15

let duck = "cute";

function bathroom() {
  let rubberDuck = "squeaky";
  function bathtub() {
    let sailorDuck = "nautical";
  }
}

function pond() {
  let realDuck = "fluffy";
}

/*
  There are 4 variables above: duck, rubberDuck, sailorDuck and realDuck.
  All within different scopes.
  Given the functions and variables above, edit the arrays below to contain only the appropriate variable names (as strings).
*/

//This array should contain the variable names (as strings) accessible in the global scope.
let globalScope = [`duck`]

//This array should contain the variable names (as strings) accessible in the bathroom function.
let bathroomScope = [`duck`, 'rubberDuck']


//This array should contain the variable names (as strings) accessible in the bathtub function.
let bathtubScope = [`duck`, `rubberDuck`, `sailorDuck`]

// //This array should contain the variable names (as strings) accessible in the pond function.

let pondScope = [`duck`, `realDuck`]

console.log(globalScope, bathroomScope, bathtubScope, pondScope)