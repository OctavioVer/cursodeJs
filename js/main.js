//alert("Hola bienvenido/a a nuestra caja registradora");
//
//class Persona {
//  constructor(nombre, apellido, edad, Dni) {
//    this.nombre = nombre;
//    this.apellido = apellido;
//    this.edad = edad;
//    this.Dni = Dni;
//  }
//}
//
//alert("Porfavor, Ingrese sus datos");
//let nombre = prompt("Ingrese su nombre");
//let apellido = prompt("Ingrese su apellido");
//let edad = Number(prompt("Ingrese su edad"));
//let Dni = Number(prompt("Ingrese su Dni"));
//const Persona1 = new Persona(nombre, apellido, edad, Dni);
//
//const listaDeCompra = [];
//let cantidad = 3;
//do {
//  let entrada = prompt("Ingrese su lista de compra \nMaximo 3 productos");
//  listaDeCompra.push(entrada.toUpperCase());
//} while (listaDeCompra.length != cantidad);
//
//let monto = Number(prompt("Ingrese el monto total de su lista de compra: "));
//
//const cuotasInteres = (cant) => {
//  let montoPorCuota;
//  if (cant <= 12) {
//    monto = monto + (monto * 15) / 100;
//    montoPorCuota = monto / cant;
//    alert(`su resultado esta mostrado por consola`);
//    console.log("Bienvenido/as");
//    console.log(Persona1);
//    console.log(
//      `Su lista de compra es: \n${listaDeCompra.join(
//        "\n"
//      )}\nValor total= ${monto}pesos\nEl monto por cuota es de: ${montoPorCuota}pesos`
//    );
//  } else {
//    alert("La cantidad de sus cuotas supera nuestro límite");
//  }
//};
//
//const cuotasFijas = (cant) => {
//  if (cant == 1) {
//    montoFijo = monto;
//    alert(`su resultado esta mostrado por consola`);
//    console.log(Persona1);
//    console.log(
//      `Su lista de compra es: \n${listaDeCompra.join(
//        "\n"
//      )}\nValor total= ${monto}pesos\nEl monto por cuota es de: ${montoFijo}pesos`
//    );
//  } else if (cant <= 12) {
//    monto = monto / cant;
//    montoPorCuota = monto;
//    alert(`su resultado esta mostrado por consola`);
//    console.log(Persona1);
//    console.log(
//      `Su lista de compra es: \n${listaDeCompra.join(
//        "\n"
//      )}\nValor total= ${monto}pesos\nEl monto por cuota es de: ${montoPorCuota}pesos`
//    );
//  } else {
//    alert("La cantidad de sus cuotas supera nuestro límite");
//  }
//};
//
//do {
//  opcion = Number(
//    prompt(
//      "Elija una opción:\n\n1.Pagar en cuotas sin interés\n2.Pagar en cuotas con interes(15%)\n3.Salir"
//    )
//  );
//  let cant;
//
//  switch (opcion) {
//    case 1:
//      cant = Number(
//        prompt(
//          "Solo se puede pagar en 1 o 12 cuotas, sin interés\nIngrese cuantas cuotas desea: "
//        )
//      );
//      cuotasFijas(cant);
//      break;
//    case 2:
//      cant = Number(
//        prompt(
//          "Solo se puede pagar en 1 o 12 cuotas, con interés\nIngrese cuantas cuotas desea: "
//        )
//      );
//      cuotasInteres(cant);
//      break;
//    case 3:
//      alert("Muchas gracias...");
//      break;
//    default:
//      alert("Opcion incorrecta");
//      break;
//  }
//} while (opcion != 3);
//
//alert("Muchas gracias por utilizar nuestro simulador");
