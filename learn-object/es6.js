let fruit1 = ['apple', 'mango', 'tomato'];
let fruit2 = ['duku', 'salak'];
let arr1 = [1,2,3];
let arr2 = [4,5,6];

let concatWithSpread = [...arr1, 4,5,6];
let concatWithSpread1 = [...fruit1, ...fruit2];
let concatArr = arr1.concat(arr2)

// console.log(fruits)
// console.log(...fruits)
// console.log(concatArr)

function sum(num1, num2, num3) {
    console.log(num1 + num2 + num3)
}

sum(1,2,3)
sum(...arr1)

console.log(concatWithSpread)
console.log(concatWithSpread1)
console.log(concatArr)