/**
 * ejercicio1
Crear una clase "Rectángulo" con métodos para calcular el área y el perímetro de un rectángulo.
Crear la clase "Rectangulo" con los atributos "ancho" y "altura".
Implementar el método "calcularArea()" que devuelve el área del rectángulo.
Implementar el método "calcularPerimetro()" que devuelve el perímetro del rectángulo.
 */

class Rectangulo {
  constructor(ancho, altura) {
    this.ancho = ancho;
    this.altura = altura;
  }

  calcularArea() {
    return this.ancho * this.altura;
  }

  calcularPerimetro() {
    return 2 * (this.ancho + this.altura);
  }
}

// Ejemplo
const miRectangulo = new Rectangulo(5, 3);
console.log("Área del rectángulo:", miRectangulo.calcularArea()); // Salida:15
console.log("Perímetro del rectángulo:", miRectangulo.calcularPerimetro()); // Salid16

/**
 *ejercicio 2 
 *  Crear una clase "CuentaBancaria" con métodos para gestionar una cuenta con saldo, depósitos y retiros.
Crear la clase "CuentaBancaria" con el atributo "saldo".
Implementar el método "depositar(cantidad)" que incrementa el saldo de la cuenta.
Implementar el método "retirar(cantidad)" que disminuye el saldo de la cuenta si hay fondos suficientes.
Implementar el método "consultarSaldo()" que muestra el saldo actual de la cuenta.

 */

class CuentaBancaria {
  constructor(saldoInicial) {
    this.saldo = saldoInicial;
  }

  depositar(cantidad) {
    this.saldo += cantidad;
    console.log(
      `Se depositaron ${cantidad} unidades. Saldo actual: ${this.saldo}`
    );
  }

  retirar(cantidad) {
    if (cantidad <= this.saldo) {
      this.saldo -= cantidad;
      console.log(
        `Se retiraron ${cantidad} uniades. Saldo actual: ${this.saldo}`
      );
    } else {
      console.log("Fondos insuficientes.");
    }
  }

  consultarSaldo() {
    console.log(`Saldo actual: ${this.saldo}`);
  }
}

// Ejemplo de uso
const miCuenta = new CuentaBancaria(1000);
miCuenta.consultarSaldo(); // : "Saldo actual : 1000"
miCuenta.depositar(500); //"Se depositaron 500 unidades. Saldo actual: 1500"
miCuenta.retirar(200); //  "Se retirron 200 xunidades. Saldo actual: 1300"
miCuenta.retirar(1500); //  "Fondos   insuficientes."
