// Countdown; Create a function that accepts a number as an input. Return a new array that counts down by  one, from the number{arr[0]} down to zero(the last element). How long is the array?




// Print and return; Your function will receive an array with two values. Print the first value and return the second

function printAndReturn(arr){
    console.log(arr[0])
    return arr[1]
}

//First Plus Length; Given an array, return the sum of the first value in the array, plus the array's length. What happens if the array's first value is not a number, but a string(like"what") or a boolean(like false)

function firstPlusLength(arr){
    return arr[0] + arr.length
}


// Values greater than second; for[1,3,5,7,9,13], print values that are greater than it's second value. return how many values this is

function valuesGreaterThanSecond(){
    let arr = [1,3,5,7,9,13]
    let count = 0
    for(let i = 0; i < arr.length; i++){
        arr[i] > arr[1] ? count ++ : null
        arr[i] > arr[1] ? console.log(arr[i]) : null
    }
    return count
}

//Values greater than second, generalized: Write a function that accepts any array, and returns a new array with the array values that are greater than its second value. print how many values this is

function valuesGreaterThanSecondGeneralized (arr){
    let count = 0
    let newArr = []
    for(let i = 0; i < arr.length; i ++){
        arr[i] > arr[1] ? newArr.push(arr[i]) : null
        arr[i] > arr[1] ? count ++ : null
    }
    console.log(count)
}

//THis length, that Value; Given two numbers, return an array of length num1 with each value num2. Print Jinx if they are the same.

function thisLengthThatValue(a, b){
    let newArr = []

    for(let i = 0; i < a; i ++){
        if(a === b){
            console.log("jinx")
            break
        } else {
            newArr.push(b)
        }
    }
    return newArr
}

//Fit the first value; Your function should accept an array. If the value at [0] is greater than the array's length, pront " too big", if value at [0] is less thatn the array's length, print "too small", otherwise print " just right"

function fitTheFirstValue(arr) {
    if(arr[0] > arr.length){
        console.log("Too big")
    } else if(arr[0] < arr.length) {
        console.log("Too small")
    } else {
        console.log("Just right!")
    }
}


//Fahrenheit to Celsius

function fahrenheitToCelsius(fDegrees){
    let cel = (fDegrees - 32) * 5/9
    return cel
}

//Celsius to Fahrenheit 

function celsiusToFahrenheit(cDegrees){
    let fah = (cDegrees * 9/5) + 32

    return fah
}