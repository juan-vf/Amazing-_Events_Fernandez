/*
Realizar un programa que dado 2 números imprima por consola si el primer numero es mayor que el segundo.
Realizar un programa que dado 2 números imprima por consola si los numeros son iguales o si son diferentes.
Realizar un programa que dado 2 números imprima por consola cual de los 2 numeros es el mas grande o si son iguales.
Realizar un programa que dado 3 números imprima por pantalla cual de los 3 es el mas chico.
Realizar un programa que dado 2 objetos representando personas con las propiedades nombre, edad y altura imprima por pantalla cual de las 2 personas es la mas alta y cual es la de mayor edad.
Realizar un programa que permita ingresar por pantalla tu nombre, edad, altura, visión y permita determinar si estas capacitado para conducir. La persona deberá cumplir con una edad mínima de 18 años, medir mas de 150cm y tener una visión de 8 de 10 como mínimo.
Realizar un programa que permita el ingreso de los siguientes datos: Nombre, pase (vip o normal), si posee entrada (si o no, s o n, true o false). Las personas que posean tu mismo nombre tienen ingreso libre así como también los que posean un pase vip, mostrar un mensaje de bienvenida. Si posee entrada preguntar si desea utilizarla, en caso afirmativo mostrar mismo mensaje de bienvenida. Y por ultimo de no tener el mismo nombre o poseer un pase vip o entrada, preguntar si desea comprar, caso afirmativo solicitar dinero disponible, si posee $1000 o mas, mostrar mensaje de venta de entrada y bienvenida, caso contrario mostrar mensaje de rechazo de venta, y en caso contrario a no querer comprar, mostrar mensaje de despedida.
Realizar un juego de adivinanza estableciendo un valor entre 1 y 10 en una variable llamada numeroIncognita y que permita en 3 intentos adivinar el numero. El usuario deberá ingresar un numero del 1 al 10 por pantalla en 3 intentos el cual se deberá guardar en una variable llamada numeroIngresado, y en cada intento deberás mostrarle un mensaje al usuario diciendo: “el numero ingresado es mayor, vuelve a intentarlo” o “el numero ingresado es menor, vuelve a intentarlo” o en caso de adivinar, un mensaje que diga: “Ganaste, haz adivinado el numero.” No te preocupes si usas mucho código repetido, mas adelante veraz como realizar este juego de manera mas eficiente.
Crear un programa que permita ingresar tu edad y decir si eres un infante (0 a 12 años), adolescente(13 a 18 años), un mayor joven (19 a 45 años) o un anciano (mas de 45 años), y en caso de ingresar una edad mayor a 100 mostrar un mensaje preguntando si en realidad tiene esa edad.
Crear un programa que permita el ingreso de “PIEDRA”, “PAPEL” o “TIJERAS” a 2 jugadores y muestre en pantalla cual de los 2 ha ganado o si han empatado. En caso de algún ingreso incorrecto mostrar por pantalla que uno de los jugadores ha hecho trampa.
Realizar un programa que permita el ingreso de un color y utilizando “switch” mostrar por pantalla los siguientes mensajes según las opciones: Blanco o Negro: Falta de color, Verde: El color de la naturaleza, Azul: El color del agua, Amarillo: El color del sol, Rojo: El color del fuego, Marrón: el color de la tierra, y para cualquier otro valor: Excelente elección, no lo teníamos pensado.
Realizar un programa que permita el ingreso de 2 valores numéricos y una operación. Según sea la operación ingresada (suma, resta, multiplicación, división) el programa deberá mostrar en pantalla un mensaje junto con el resultado. En caso de haber elegido división realizar la operación siempre que sea posible o mostrar un mensaje de ERROR si el divisor ingresado fue 0.
Crear un programa que permita ingresar todos los datos de tu documento nacional de identidad, mostrar por pantalla un mensaje que imprima todos los datos ingresados y pregunte si están correctos los mismos. En caso afirmativo, crear un objeto llamado dni con todos los datos ingresados y mostrarlos por consola con console.table() mas un mensaje de registro exitoso, en caso de que la persona rechace confirmar los datos, mostrar un mensaje que diga: vuelva a intentarlo en 1 mes.
*/
//1
// let num1 = prompt("ingrese un numero");
// let num2 = prompt("ingrese otro numero");
// if(num1 > num2){
//     console.log("numero: " + num1+ " es mayor");
// }else{
//     console.log("numero: " + num2+ " es mayor");
// };
// //2
// if(num1 === num2){
//     console.log("los numeros: " + num1+ " y " + num2 + "son iguales");
// }else if(num1 != num2){
//     console.log("los numeros: " + num1+ " y " + num2 + "son desiguales");
// };
// //3
// if(num1 > num2){
//     console.log("numero: " + num1+ " es mayor");
// }else if(num1 < num2){
//     console.log("numero: " + num2+ " es mayor");
    
// }else if(num1 == num2){
//     console.log("los numeros: " + num1+ " y " + num2 + "son iguales");
// }else if(num1 != num2){
//     console.log("los numeros: " + num1+ " y " + num2 + "son desiguales");
// };
// //4
// let num3 = 3;

// if(num1 > num2 && num1 > num3){
//     console.log("numero: " + num1+ " es el menor de los tres numeros");
// }else if(num2 < num1 && num2 < num3){
//     console.log("numero: " + num2+ " es el menor de los tres numeros");
// }else if(num3 < num1 && num3 < num2){
//     console.log("numero: " + num3+ " es el menor de los tres numeros");
// }else{
//     console.log("no hay numeros menores");
// }
// //5
// let per1 = {
//     nombre:"John",
//     edad: 64,
//     altura:171,
// };
// let per2 = {
//     nombre:"Fill",
//     edad: 48,
//     altura: 174,
// };
// //mas alto
// if(per1.altura > per2.altura){
//     console.log("la persona 1 es la mas alta, con "+per1.altura+"cm");
// }else if(per2.altura > per1.altura){
//     console.log("la persona 2 es la mas alta, con "+per2.altura+"cm");
// }
// //mayor
// if(per1.edad > per2.edad){
//     console.log("la persona 1 es mayor que la persona 2, con "+per1.edad+" años");
// }else if(per2.edad > per1.edad){
//     console.log("la persona 2 es mayor que la persona 1, con "+per2.edad+" años");
// }else{console.log("ninguno es mayor");}
//6
let person = {
    nombre: (prompt("ingrese su nombre")),
    edad: (prompt("ingrese su edad")), 
    altura: (prompt("ingrese su altura en cm")), 
    visión: (prompt("ingrese su grado de vision (0 a 10)")),
}
if(person.edad >= 18 && person.altura > 150 && person.visión >= 8 && person.visión <= 10){
    console.log("puede conducir");
}else{
    console.log("no puede conducir");
}

/*Realizar un juego de adivinanza estableciendo un valor entre 1 y 10 en una variable llamada numeroIncognita y que permita en 3 intentos adivinar el numero. El usuario deberá ingresar un numero del 1 al 10 por pantalla en 3 intentos el cual se deberá guardar en una variable llamada numeroIngresado, y en cada intento deberás mostrarle un mensaje al usuario diciendo: “el numero ingresado es mayor, vuelve a intentarlo” o “el numero ingresado es menor, vuelve a intentarlo” o en caso de adivinar, un mensaje que diga: “Ganaste, haz adivinado el numero.” No te preocupes si usas mucho código repetido, mas adelante veraz como realizar este juego de manera mas eficiente.
Crear un programa que permita ingresar tu edad y decir si eres un infante (0 a 12 años), adolescente(13 a 18 años), un mayor joven (19 a 45 años) o un anciano (mas de 45 años), y en caso de ingresar una edad mayor a 100 mostrar un mensaje preguntando si en realidad tiene esa edad.
Crear un programa que permita el ingreso de “PIEDRA”, “PAPEL” o “TIJERAS” a 2 jugadores y muestre en pantalla cual de los 2 ha ganado o si han empatado. En caso de algún ingreso incorrecto mostrar por pantalla que uno de los jugadores ha hecho trampa.
Realizar un programa que permita el ingreso de un color y utilizando “switch” mostrar por pantalla los siguientes mensajes según las opciones: Blanco o Negro: Falta de color, Verde: El color de la naturaleza, Azul: El color del agua, Amarillo: El color del sol, Rojo: El color del fuego, Marrón: el color de la tierra, y para cualquier otro valor: Excelente elección, no lo teníamos pensado.
Realizar un programa que permita el ingreso de 2 valores numéricos y una operación. Según sea la operación ingresada (suma, resta, multiplicación, división) el programa deberá mostrar en pantalla un mensaje junto con el resultado. En caso de haber elegido división realizar la operación siempre que sea posible o mostrar un mensaje de ERROR si el divisor ingresado fue 0.
Crear un programa que permita ingresar todos los datos de tu documento nacional de identidad, mostrar por pantalla un mensaje que imprima todos los datos ingresados y pregunte si están correctos los mismos. En caso afirmativo, crear un objeto llamado dni con todos los datos ingresados y mostrarlos por consola con console.table() mas un mensaje de registro exitoso, en caso de que la persona rechace confirmar los datos, mostrar un mensaje que diga: vuelva a intentarlo en 1 mes.
*/
//7
let numeroIncognita = 4
let adivino = false;
for (let index = 0; index <= 2 || adivino === true; index++) {
    let numeroIngresado = prompt("ingrese el numero")
    if(numeroIngresado >= 1 && numeroIngresado <= 10 && numeroIngresado === numeroIncognita){
        adivino = true;
        console.log("Ganaste, haz adivinado el numero.");
    }else if(numeroIngresado > numeroIncognita){
        console.log("el numero ingresado es mayor, vuelve a intentarlo");
    }
    else if(numeroIngresado < numeroIncognita){
        console.log("el numero ingresado es menor, vuelve a intentarlo");
    }
}
// if(numeroIngresado >= 1 && numeroIngresado <= 10 && numeroIngresado === numeroIncognita){
//     console.log("Ganaste, haz adivinado el numero.");
// }else if(numeroIngresado > numeroIncognita){
//     console.log("el numero ingresado es mayor, vuelve a intentarlo");
// }
// else if(numeroIngresado < numeroIncognita){
//     console.log("el numero ingresado es menor, vuelve a intentarlo");
// }

// numeroIngresado = prompt("ingrese el numero nuevamente")
// if(numeroIngresado >= 1 && numeroIngresado <= 10 && numeroIngresado === numeroIncognita){
//     console.log("Ganaste, haz adivinado el numero.");
// }else if(numeroIngresado > numeroIncognita){
//     console.log("el numero ingresado es mayor, vuelve a intentarlo");
// }
// else if(numeroIngresado < numeroIncognita){
//     console.log("el numero ingresado es menor, vuelve a intentarlo");
// }

// numeroIngresado = prompt("ingrese el numero ultimo intento")
// if(numeroIngresado >= 1 && numeroIngresado <= 10 && numeroIngresado === numeroIncognita){
//     console.log("Ganaste, haz adivinado el numero.");
// }else if(numeroIngresado > numeroIncognita){
//     console.log("el numero ingresado es mayor, vuelve a intentarlo");
// }
// else if(numeroIngresado < numeroIncognita){
//     console.log("el numero ingresado es menor, vuelve a intentarlo");
// }
//8
let edad8 = prompt("ingrese su edad");
if(edad8 > 0 && edad8 <= 12 ){
    console.log("infante");
}else if(edad8 >= 13 && edad8 <= 18 ){
    console.log("adolecente");
}else if(edad8 >= 19 && edad8 <= 45 ){
    console.log("joven mayor");
}else if(edad8 >= 45 ){
    console.log("anciano");
}
//9

//10
//
let afirmacion;
let DNI;
let nombre =  prompt("ingrese su nombre");
let sexo =  prompt("ingrese su sexo");
let nacionalidad =  prompt("ingrese su nacionalidad");
let ejemplar =  prompt("ingrese su ejemplar");
let fNacimiento =  prompt("ingrese su fecha de nacimiento");
let fEmision =  prompt("ingrese su fecha de emision");
let fVencimiento =  prompt("ingrese su fecha de vencimiento");
let numero =  prompt("ingrese su numero de documento");
let domicilio =  prompt("ingrese su domicilio, sin guiones ni puntos");
let cuil =  prompt("ingrese su cuil, sin guiones ni puntos");
let lNacimiento =  prompt("ingrese su lugar de nacimiento");
alert(table(nombre, sexo, nacionalidad, ejemplar, fNacimiento, fEmision, fVencimiento, numero, domicilio, cuil, lNacimiento), "Lea los datos y en el caso de ser correctos, ingrese si en la ventana siguiente");
alert(afirmacion = prompt("ingrese si para cargar los datos, en caso contrario no"));
afirmacion.toLowerCase()
(afirmacion === "si")?[
    DNI = {
        nombre: prompt("ingrese su nombre"),
        sexo: prompt("ingrese su sexo"),
        nacionalidad: prompt("ingrese su nacionalidad"),
        ejemplar: prompt("ingrese su ejemplar"),
        fNacimiento: prompt("ingrese su fecha de nacimiento"),
        fEmision: prompt("ingrese su fecha de emision"),
        fVencimiento: prompt("ingrese su fecha de vencimiento"),
        numero: prompt("ingrese su numero de documento"),
        domicilio: prompt("ingrese su domicilio, sin guiones ni puntos"),
        cuil: prompt("ingrese su cuil, sin guiones ni puntos"),
        lNacimiento: prompt("ingrese su lugar de nacimiento"),
    },
    console.log(table(DNI.nombre, DNI.sexo, DNI.nacionalidad, DNI.ejemplar, DNI.fNacimiento, DNI.fEmision, DNI.fVencimiento, DNI.numero, DNI.domicilio, DNI.cuil, DNI.lNacimiento))
]:[console.log("VUELVA EN UN MES")];