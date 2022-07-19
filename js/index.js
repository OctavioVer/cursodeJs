let productos = [];

let formulario;
let inputNombre;
let inputprecioDelProducto;
let inputMedioDePago;
let inputCantidadDeCuotas;
let inputTotal;
let tabla;
let errores;

class Producto {
  constructor(nombreProducto, precioProducto, metodoPago, cantidadCuotas) {
    this.nombreProducto = nombreProducto;
    this.precioProducto = precioProducto;
    this.metodoPago = metodoPago;
    this.cantidadCuotas = cantidadCuotas;
  }
}

function inicializarElementos() {
  formulario = document.getElementById("formulario");
  inputNombre = document.getElementById("nombreProducto");
  inputprecioDelProducto = document.getElementById("precioProducto");
  inputMedioDePago = document.getElementById("cuotas");
  inputCantidadDeCuotas = document.getElementById("cantidadCuotas");
  tabla = document.getElementById("tablaProductos");
  errores = document.querySelector(".errores");
  errores.style.display = "none";
}
inicializarElementos();

formulario.onsubmit = (event) => {
  event.preventDefault();

  let nuevoProducto = new Producto(
    inputNombre.value,
    inputprecioDelProducto.value,
    inputMedioDePago.value,
    inputCantidadDeCuotas.value
  );
  if (
    inputNombre.value != "" &&
    inputMedioDePago.value != "" &&
    inputCantidadDeCuotas.value != "" &&
    inputprecioDelProducto.value != ""
  ) {
    productos.push(nuevoProducto);
    productos.reverse();
    limpiarTabla();
    agregarProductosTabla();
    errores.style.display = "none";
    formulario.reset();
  } else {
    errores.style.display = "block";
  }
};

function limpiarTabla() {
  while (tabla.rows.length > 1) {
    tabla.deleteRow(1);
  }
}

function agregarProductosTabla() {
  productos.forEach((producto) => {
    let tabla = document.querySelector(".tabla");
    let filaTabla = document.createElement("tr");

    filaTabla.innerHTML = `
        <td>${producto.nombreProducto}</td>
        <td>${producto.precioProducto}</td>
        <td>${producto.metodoPago}</td>
        <td>${producto.cantidadCuotas}</td>
        `;

    tabla.append(filaTabla);
  });
}
