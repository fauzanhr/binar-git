// Parent Class
function Human(fullname, address, job) {
    this.namaLengkap = fullname;
    this.alamat = address;
    this.pekerjaan = job;
}

// Child Class
function Atlit(fullname, address, job, reward) {
    // Call parent class property
    Human.call(this, fullname, address, job)
    this.prestasi = reward
}

var Anggara = new Atlit('Anggara Setiawan', 'Batam', 'Fullstack Developer', 
'Build Electronic Marketplace')
console.log(Anggara)