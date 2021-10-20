// 4 Tipe data primitif
// String
// Number
// Boolean
// null

// Object
// Property (Identitas yang terdapat dalam objek)
// Method (Fugsi yang terdapat didalam objek)
// Math.pow();

// function namaLengkap()
// {
//     return 'Full Name';
// }

// namaLengkap();

var phone = '08888'

// Bentuk 1 penulisan Objek
var person = {
    // Property
    // camelCase
    firstName: 'Eric',
    lastName: 'Ricardo',
    email: 'eric@mail.com',
    address: 'Test Street',
    IdNumber: 0889,
    // Snake Case
    phone_number: 08123123,

    // Method
    getFullName: function () {
        return 'My name is ' + this.firstName + ' ' + this.lastName
    },
    // Function
    getInfo: function() {
        return 'Email ' + this.email + ' ID Number ' + this.IdNumber
    },
    // Arrow Function
    getEmail: () => { 
        return 'Information from function getEmail ' + person.email 
    },
    // Shorthand Arrow function
    getAddress: () => 'Address ' + person.address,
    getSum: (num1, num2) => num1 + num2,
    job: {
        profession: 'Network Engineer',
        location: 'Batam',
        level: 'Senior'
    }
}

// Bentuk ke 2 object
var person2 = new Object();
person2.email = 'user1@mail.com';
person2.firstName = 'user1';
person2.lastName = 'user2';
person2.getFullName = function (){
    return 'My name is ' + this.firstName + ' ' + this.lastName
}
person2.getEmail = () => 'Email ' + person2.email

// Bentuk ke 3 objek
var person3 = function(firstName, lastName, job, address) {
    this.firstName = firstName,
    this.lastName = lastName,
    this.nama = {firstName, lastName},
    this.work = job,
    this.alamat = address,
    this.getFullName = () => 'Nama Saya Adalah ' + firstName + ' ' + lastName
}

function person4(firstName, lastName, address) {
    // Property
    this.namaDepan = firstName,
    this.namaBelakang = lastName,
    this.alamat = address,

    // Method
    this.gantiNama = function(nama) {
        this.namaBelakang = nama
    }
}

let SetiawanAnggara = new person4('Setiawan', 'Anggara', 'Batam')
console.log(SetiawanAnggara.namaBelakang)
SetiawanAnggara.gantiNama('FSW 15')
console.log(SetiawanAnggara.namaBelakang)

// Objek bentuk keempat
class Human {
    constructor(firstName, lastName, job) {
        this.firstName = firstName;
        this.fullname = [firstName, lastName]
        this.lastName = lastName;
        this.job = job;
        this.getFullName = () => 'Nama Saya Adalah ' + firstName + ' ' + lastName;
    }

    getNamaLengkap() {
        return this.firstName + ' ' + this.lastName;
    }
}

// var Anggara = new Human('Anggara', 'Setiawan', 'Network Engineer')
// Anggara.address = 'Batam Market Place'
// Anggara.job = 'Fullstack Developer'
// console.log(typeof(Anggara))
// console.log(Anggara.firstName)
// console.log(Anggara.address)
// console.log(Anggara.job)
// console.log(Anggara.getFullName())
// console.log(Anggara.fullname[0])
// console.log(Anggara.fullname[1])
// console.log(Anggara.fullname)
// console.log(Anggara.getNamaLengkap())

// Objek bentuk pertama
// console.log(typeof(person))
// console.log(person.firstName)
// console.log(person.phone_number)
// console.log(person.getFullName())
// console.log(person.getInfo())
// console.log(person.getEmail())
// console.log(person.getAddress())
// console.log(person.getSum(1,1))
// console.log(person.job.profession)

// Objek bentuk kedua
// console.log(typeof(person2))
// console.log(person2.email)
// console.log(person2.getFullName())
// console.log(person2.getEmail())

// Objek bentuk ketiga
// var anggara = new person3('Anggara', 'Setiawan', 'Network Engineer', 'Batam')
// console.log(anggara.firstName)
// console.log(anggara.getFullName())

// person3.getNamaLengkap = function () {
//     return 'My Name is ' + anggara.firstName + ' ' + anggara.lastName
// }
// console.log(person3.getNamaLengkap())
// console.log(anggara.nama.firstName)


