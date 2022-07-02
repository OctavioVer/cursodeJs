
alert("Hola bienvenido/a A nuestra calculadora de pagos en cuotas");
let monto = Number(prompt("Ingrese un monto deseado: "));


const cuotasInteres =(cant) =>{
   let montoPorCuota;
   if(cant <= 12){
      monto = monto + monto * 15 / 100;
      montoPorCuota = monto / cant;
      alert(`El monto por cuota es de: ${montoPorCuota}`);
   }else{
      alert("La cantidad de sus cuotas supera nuestro límite");
   }
}

const cuotasFijas =(cant) =>{
   if (cant == 1) {
      monto = monto;
      alert(`El monto por cuota es de: ${monto}`)
   }else if 
      (cant <= 12) {
         monto = monto / cant;
         montoPorCuota = monto;
         alert(`El monto por cuota es de: ${montoPorCuota}`);
   }else{
      alert("La cantidad de sus cuotas supera nuestro límite");
   }
}

do {
   opcion = Number(prompt("Elija una opción:\n\n1.Pagar en cuotas sin interés\n2.Pagar en cuotas con interes(15%)\n3.Salir"))
   let cant;

   switch (opcion) {
      case 1:
         cant = Number(prompt("Solo se puede pagar en 1 o 12 cuotas, sin interés\nIngrese cuantas cuotas desea: "));
         cuotasFijas(cant);
         break;
      case 2:
         cant = Number(prompt("Solo se puede pagar en 1 o 12 cuotas, con interés\nIngrese cuantas cuotas desea: "));
         cuotasInteres(cant);
         break;
      case 3:
         alert("Muchas gracias...");
         break;
      default:
         alert("Opcion incorrecta");
         break;
   }
   
} while (opcion != 3);

alert("Muchas gracias por utilizar nuestro simulador")