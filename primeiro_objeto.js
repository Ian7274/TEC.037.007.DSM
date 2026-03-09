class Conta{
    constructor(tipo, titular, saldo) {
        this.tipo = tipo;
        this.titular = titular;
        this.saldo = saldo;
    }
    depositar(valor) {
        this.saldo = this.saldo + valor;
    }
    mostrarExtrato() {
        return `Titular: ${this.titular} - Tipo: ${this.tipo} - Saldo: R$${this.saldo}`;
    }
    depositar (valor) {
        this.valor = this.valor + valor;
    }
}
      let contaCorrente = new Conta("corrente", "Carlinhos", 1000);
      let contaPoupanca = new Conta("poupança", "Dalva", 500);
      console.log(contaCorrente.mostrarExtrato());