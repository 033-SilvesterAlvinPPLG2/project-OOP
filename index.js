class Perusahaan {
    constructor(nama, gaji) {
        this.nama = nama;
        this.gaji = gaji;
    }

    name(){
        console.log(`nama saya ${this.nama}`);
    }

}


class Pekerja extends Perusahaan {
    uang() {
        console.log(`gaji saya ${this.gaji - this.gaji * 0.02}`);
    }
}

const Gj = new Pekerja("johan", 18000000)
Gj.name();
Gj.uang();

const Nm = new Pekerja("Alfon", 13000000)
Nm.name();
Nm.uang();

const Mn = new Pekerja("Wanto", 7000000);
Mn.name();
Mn.uang();