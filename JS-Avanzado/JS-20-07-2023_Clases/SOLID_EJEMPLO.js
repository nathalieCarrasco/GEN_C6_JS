/**
 * SOLID es un conjunto de principios de diseño orientado a objetos que buscan crear código más limpio, flexible y mantenible. A continuación, te proporcionaré un ejemplo simple en JavaScript que muestra cómo aplicar algunos de los principios SOLID.
 * 
 */

/**
 * Principio de Responsabilidad Única (Single Responsibility Principle - SRP):
El SRP establece que una clase debe tener una sola razón para cambiar. Es decir, cada clase debe tener una única responsabilidad en el sistema.
 */

//EJEMPLO DE SRP
// Clase que tiene una única responsabilidad de cálculo matemático.
class Calculadora {
  sumar(a, b) {
    return a + b;
  }

  restar(a, b) {
    return a - b;
  }
}

/**
 * Principio de Abierto/Cerrado (Open/Closed Principle - OCP):
El OCP sugiere que las clases deben estar abiertas para extenderse pero cerradas para modificarse. Es decir, debemos poder extender el comportamiento de una clase sin modificar el código existente.
 */
// EJEMPLODE OCP
// Clase base que cumple con el OCP al ser extensible mediante herencia.
class Forma {
    calcularArea() {
      throw new Error("Método calcularArea() debe ser implementado en las subclases.");
    }
  }
  
  // Extensión de la clase base para calcular el área de un rectángulo.
  class Rectangulo extends Forma {
    constructor(base, altura) {
      super();
      this.base = base;
      this.altura = altura;
    }
  
    calcularArea() {
      return this.base * this.altura;
    }
  }
  
  // Extensión de la clase base para calcular el área de un círculo.
  class Circulo extends Forma {
    constructor(radio) {
      super();
      this.radio = radio;
    }
  
    calcularArea() {
      return Math.PI * this.radio ** 2;
    }
  }

  /**
   * Principio de Sustitución de Liskov (Liskov Substitution Principle - LSP):
El LSP establece que las instancias de una clase base deben poder ser reemplazadas por instancias de sus subclases sin afectar la funcionalidad del programa.
   */
  // EJEMPLO DE LSP 
  // Clase base que cumple con el LSP al ser reemplazada por sus subclases.
class Animal {
    hacerSonido() {
      throw new Error("Método hacerSonido() debe ser implementado en las subclases.");
    }
  }
  
  class Perro extends Animal {
    hacerSonido() {
      return "Guau guau!";
    }
  }
  
  class Gato extends Animal {
    hacerSonido() {
      return "Miau miau!";
    }
  }
  
  function hacerRuido(animal) {
    return animal.hacerSonido();
  }
  
  const miPerro = new Perro();
  const miGato = new Gato();
  
  console.log(hacerRuido(miPerro)); // Salida: "Guau guau!"
  console.log(hacerRuido(miGato)); // Salida: "Miau miau!"

  
  /**
   * Principio de Segregación de Interfaces (Interface Segregation Principle - ISP):
El ISP establece que una clase no debe verse obligada a implementar interfaces que no utiliza. En otras palabras, las interfaces deben ser específicas y con un propósito único.

// ejemplo de ISP 
// Interfaz para un vehículo que solo necesita acelerar y frenar.
/* 
class IVehiculo {
    acelerar() {
      throw new Error("Método acelerar() debe ser implementado.");
    }
  
    frenar() {
      throw new Error("Método frenar() debe ser implementado.");
    }
  }
  
  // Clase que implementa solo los métodos necesarios para un vehículo.
  class Auto implements IVehiculo {
    acelerar() {
      console.log("El auto está acelerando.");
    }
  
    frenar() {
      console.log("El auto está frenando.");
    }
  }
  
  // Clase que implementa solo los métodos necesarios para una bicicleta.
  class Bicicleta implements IVehiculo {
    acelerar() {
      console.log("La bicicleta está acelerando.");
    }
  
    frenar() {
      console.log("La bicicleta está frenando.");
    }
  }

  /**
   * Principio de Inversión de Dependencias (Dependency Inversion Principle - DIP):
El DIP establece que los módulos de alto nivel no deben depender de módulos de bajo nivel. Ambos deben depender de abstracciones. Además, las abstracciones no deben depender de los detalles; los detalles deben depender de las abstracciones.
   */

// Clase de alto nivel que depende de una abstracción.
class Empleado {
    constructor(nombre) {
      this.nombre = nombre;
    }
  
    trabajar() {
      console.log(this.nombre + " está trabajando.");
    }
  }
  
  // Clase de bajo nivel que implementa la abstracción requerida.
  class Developer {
    trabajar() {
      console.log("El desarrollador está programando.");
    }
  }
  
  // Clase que inyecta la dependencia en el constructor.
  class Empresa {
    constructor(empleado) {
      this.empleado = empleado;
    }
  
    operar() {
      this.empleado.trabajar();
    }
  }
  
  const developer = new Developer();
  const empleado = new Empleado("Juan");
  const empresa1 = new Empresa(developer);
  const empresa2 = new Empresa(empleado);
  
  empresa1.operar(); // Salida consola: "El desarrollador está programando."
  empresa2.operar(); // Salida conssola:  "Juan está trabajando."

  /**
   * Estos ejemplos ilustran cómo aplicar los principios SOLID en JavaScript para mejorar la calidad y la flexibilidad del código, y cómo cada principio aborda un aspecto diferente de la programación orientada a objetos. Al seguir estos principios, podemos crear sistemas más mantenibles, escalables y fáciles de extender a medida que evoluciona el proyecto.
   */