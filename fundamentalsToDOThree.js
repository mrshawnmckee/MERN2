//Assignment for Coding Dojo

// Biggie Size; Given an array, write a function that changes all positive numbers in the array to "big"

function changeToPostive(arr){
    for(let i = 0; i < arr.length; i++){
        arr[i] > 0 ? arr[i] = "big" : null
    }
        return arr
}

console.log(changeToPostive([1, -3, 7, -6]))

// Print Low Return High; Create a function that takes an array of numbers. The function should print the lowest value in the array and return the highest

function lowAndHigh(arr){
    let min = arr[0]
    let max = arr[0]
    for(let i = 0; i < arr.length; i++){
        if(arr[i] > max){
            max = arr[i]
        } 
        else if(arr[i]< min){
            min = arr[i]
        }
    }
    console.log(min)
    return max
}

console.log(lowAndHigh([3, 6, 1, 65]))


// Print One Retrun Another; Build a function that takes an array of numbers. The function should print the second-t0-last value in the array, and return the first odd in the array

function printOneReturnAnother(arr) {
    let firstOdd = 0;
    console.log(arr[arr.length -2])
    for(let i = 0; i < arr.length; i++){
        if(arr[i] % 2 !== 0){
            firstOdd = arr[i]
            break
        }   
    }
    return firstOdd
}

console.log(printOneReturnAnother([2, 4, 5, 8, 7, 9]))


// Double Vision; Given an array, create a function to return a new array where each value in the original has been doubled. Calling double([1,2,3]) should return [2,4,6] whithout changing the original

function double(arr){
    let newarr = []
    for(let i = 0; i < arr.length; i++){
        newarr.push(arr[i]* 2)
    }
    return newarr
}

console.log(double([1, 2, 4, 6]))

// Count Positives; Given an array of numbers, create a function to replace last value with the number of positive values. Example, countPositives([-1,1,1,1]) changes an array to [-1,1,1,3] and returns it

function countPositives(arr){
    let count = 0;
    for(let i = 0; i < arr.length; i++){
        arr[i] > 0 ? count ++ : null
    }
    arr[arr.length - 1] = count
    return arr
}

console.log(countPositives([-1, 1, 1, 1]))

// Evens and odds; Create a function the accepts an array. Every time that array had three odd values in a row, print "That's odd". Everytime the array has three evens in a row,  print "Even more so"




// Increment the seconds; Given arr, add 1 to elements([1],[3],etc), return all values and return arr




//Previous Lengths; You are passed an array containing strings. Working with that same array, replace each string with a number - the length of the string at previous array index - and return the array


