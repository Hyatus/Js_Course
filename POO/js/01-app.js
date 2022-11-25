
class Cliente {
    // Class declaration
    constructor(nombre,saldo){
        this.nombre = nombre,
        this.saldo = saldo
    }

    mostrarInformacion(){
        return `Cliente: ${this.nombre} Saldo: ${this.saldo}`
    }
}

const juan = new Cliente('Juan',400);
juan.mostrarInformacion()
console.log(juan)

const Cliente2 = class {
    // Class Expression

}



const cliente2 = new Cliente2();
console.log(cliente2)


