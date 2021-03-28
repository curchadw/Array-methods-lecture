//shift()
//removes first item in index 0 and shifts the rest of the  other indexes 

let numbers  = [1,2,3,4,5,6,7]

let newArray = numbers.shift()

console.log(numbers)
//splice cuts outs certain parts of the newArray

let pos = 1;
let x = 2
numbers.splice(pos, x)

console.log(numbers)

//filter

//create a function that will show values that are divisible by 2
const divideByTwo = (number) =>{
  return number%2===0
}

console.log(numbers.filter(divideByTwo))