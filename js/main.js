class Producto {
  constructor(id, nombre, precio, categoria) {
    this.id = id;
    this.nombre = nombre;
    this.precio = precio;
    this.categoria = categoria;
  }
}

let productos = [
  new Producto(100, "queso azul", 1200, "quesos"),
  new Producto(101, "queso parmesano", 1400, "quesos"),
  new Producto(102, "queso mozzarella", 1450, "quesos"),
  new Producto(103, "queso ricotta", 1500, "quesos"),
  new Producto(104, "queso feta", 1500, "quesos"),
  new Producto(105, "leche", 500, "lacteos"),
  new Producto(106, "leche de oveja", 550, "lacteos"),
  new Producto(107, "leche de cabra", 600, "lacteos"),
  new Producto(108, "yogurt", 450, "lacteos"),
];

let categorias = ["quesos", "lacteos"];

let productosEnCarro = [];

let categoria = "";

while (categoria != "salir" && categoria != null) {
  let aux = categorias.join(", ");
  categoria = prompt(
    'ingrese una categoria para comprar o ingresar "salir": \n(' + aux + ")"
  );

  if (categoria != "salir" && categoria != null) {
    let productosFiltradoPorCategoria = productos.filter(
      (item) => item.categoria == categoria
    );

    let cartel = "";
    for (let i = 0; i < productosFiltradoPorCategoria.length; i++) {
      cartel +=
        "id:" +
        productosFiltradoPorCategoria[i].id +
        " precio: " +
        productosFiltradoPorCategoria[i].precio +
        " " +
        " producto: " +
        productosFiltradoPorCategoria[i].nombre +
        "\n";
    }
    let idSelecionado = parseInt(
      prompt("Selecione el id del producto que quiera comprar: \n\n" + cartel)
    );

    let productoParaCarro = productosFiltradoPorCategoria.find(
      (item) => item.id == idSelecionado
    );

    if (productoParaCarro) {
      productosEnCarro.push(productoParaCarro);
    }
    console.log(productoParaCarro);
  }
}
