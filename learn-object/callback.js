// Memanggil callback dengan keyword
let greeting1 = () => {
    console.log('Greeting 1')
}

let greeting2 = (cb) => {
    console.log('Greeting 2');
    cb();
}

greeting2(greeting1)

let kali = (num1, num2) => {
    return num1 * num2
}

let bagi = (num1, num2) => {
    return num1 / num2;
}

// Memanggil callback tanpa keyword callback
let hitung = (num1, num2, op) => {
    return op(num1, num2)
}

console.log(hitung(6, 2, bagi))