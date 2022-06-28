 
 let tabla = prompt("ingrese un numero del 1 al 9");
 let resultado;

 if (tabla >9) {
    document.write("tu numero no cuenta con la consigna,")
 }else
 for (let i = 1; i <=10; i++) {
    resultado = tabla * i
    document.write(tabla+"x"+i+"= "+resultado +"<br>")  
 }
 document.write(" la tabla que realizo usted fue la del "+tabla);