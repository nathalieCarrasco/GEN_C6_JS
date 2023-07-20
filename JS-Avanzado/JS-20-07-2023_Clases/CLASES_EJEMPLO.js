class Animal {
  constructor(nombre, tipo) {
    this.nombre = nombre;
    this.tipo = tipo;
  }

  sonido() {
    return "Hace algún sonido desconocido";
  }
}

class Perro extends Animal {
  constructor(nombre, raza) {
    super(nombre, "Perro");
    this.raza = raza;
  }

  sonido() {
    return "Guau guau!";
  }
}

class Gato extends Animal {
  constructor(nombre, color) {
    super(nombre, "Gato");
    this.color = color;
  }

  sonido() {
    return "Miau miau!";
  }
}

class Vaca extends Animal {
  constructor(nombre, produccionLeche) {
    super(nombre, "Vaca");
    this.produccionLeche = produccionLeche;
  }

  sonido() {
    return "Muu muu!";
  }
}

// Crear instancias de los animales
const miPerro = new Perro("Max", "Labrador");
const miGato = new Gato("Whiskers", "Naranja");
const miVaca = new Vaca("Margarita", "Alta");

// Acceder a los métodos de los animales
console.log(miPerro.nombre + " es un " + miPerro.tipo + " que hace: " + miPerro.sonido());
console.log(miGato.nombre + " es un " + miGato.tipo + " que hace: " + miGato.sonido());
console.log(miVaca.nombre + " es una " + miVaca.tipo + " que hace: " + miVaca.sonido());