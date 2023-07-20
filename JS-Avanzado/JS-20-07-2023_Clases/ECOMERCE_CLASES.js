class Producto {
    constructor(nombre, precio, stock) {
      this.nombre = nombre;
      this.precio = precio;
      this.stock = stock;
    }
  
    mostrarInformacion() {
      console.log(`Nombre: ${this.nombre} - Precio: $${this.precio} - Stock: ${this.stock}`);
    }
  }
  
  class Carrito {
    constructor() {
      this.productos = [];
    }
  
    agregarProducto(producto, cantidad) {
      if (producto.stock >= cantidad) {
        this.productos.push({ producto, cantidad });
        console.log(`Se agregaron ${cantidad} "${producto.nombre}" al carrito.`);
        producto.stock -= cantidad;
      } else {
        console.log(`No hay suficiente stock de "${producto.nombre}".`);
      }
    }
  
    mostrarCarrito() {
      console.log("Contenido del Carrito:");
      this.productos.forEach((item) => {
        console.log(`- ${item.cantidad} x ${item.producto.nombre}`);
      });
    }
  }
  
  // Ejemploa
  const producto1 = new Producto("Camiseta", 25, 10);
  const producto2 = new Producto("Pantalón", 40, 5);
  const producto3 = new Producto("Zapatos", 50, 3);
  
  const carrito = new Carrito();
  
  carrito.agregarProducto(producto1, 2); // Se agregaron 2 "Camiseta" al carrito.
  carrito.agregarProducto(producto2, 1); // Se agregaron 1 "Pantalón" al carrito.
  carrito.agregarProducto(producto3, 4); // No hay suficiente stock de "Zapatos".
  carrito.mostrarCarrito();
  /*
  ---------------salida carrito------------------------------------
  Contenido del Carrito
  - 2 x Camiseta
  - 1 x Pantalón
  */
  