/*
1.	Crear una variable llamada miNombre y guardar en ella su primer nombre.
2.	Crear una variable llamada miApellido y guardar en ella su apellido.
3.	Crear una variable llamada miEdad y guardar en ella su edad.
4.	Crear una variable llamada miMascota y guardar en ella el nombre de su mascota.
5.	Crear una variable llamada edadMascota y guardar en ella la edad de la mascota.
6.	Visualizar todas las variables dentro de la consola del navegador escribiendo el nombre de cada una de ellas.
7.	Crear una variable llamada nombreCompleto y guardar en ella la concatenación de miNombre y miApellido.
8.	Crear una variable llamada textoPresentacion y guardar en ella un texto comprendido con todas las variables creadas hasta el momento.
9.	Crear una variable sumaEdades, restaEdades, productoEdades, divisionEdades y calcular sus respectivas operaciones con las variables miEdad y edadMascota.
10.	Realizar la carga de las variables del punto 1 al 5 utilizando prompt() y luego ejecutar el código correspondiente para realizar los puntos del 6 al 9 con los datos cargados.
11.	Crear un objeto llamado alumno con un mínimo de 5 propiedades, mostrar dicho objeto utilizando console.table() y también mostrar cada una de las propiedades del objeto por separado.
12.	Crear un objeto llamado mascota con un mínimo de 5 propiedades, mostrar dicho objeto utilizando console.table() y también mostrar cada una de las propiedades del objeto por separado.
13.	Crear un array llamado frutas con un mínimo de 5 elementos y mostrar por consola el array completo y cada uno de los elementos por separado.
14.	Crear un array llamado números con un mínimo de 5 elementos y mostrar por consola el array completo y cada uno de los elementos por separado.
15.	Crear un array llamado familia con un mínimo de 5 objetos y mostrar por consola el array completo y cada uno de los elementos por separado.
16.	Crear una variable llamada textoAleatorio formando una frase con el segundo elemento del array del punto 13, el cuarto elemento del punto 14 y el quinto objeto del array del punto 15.
17.	Utilizar prompt() para leer por pantalla mi edad y la edad de un compañero y mostrar por consola los resultados de comparar los valores y guardarlos en variables llamadas por ejemplo: edadesIguales, soyMayor, soyMenor, etc. Y mostrar mensajes en consola como los siguientes:
a.	Mi edad es igual a la de mi compañero: false
b.	Mi edad es mayor a la de mi compañero: true
c.	Mi edad es menor a la de mi compañero: false
18.	Compare su edad ingresada por pantalla con prompt() con el numero 18 y guardarlo en una variable llamada soyMayorDeEdad y mostrar por consola un mensaje que diga: Soy mayor de edad y el valor de la variable.
19.	Introducir por pantalla la edad y la altura de una persona y guardarlas en variables separadas y en una variable llamada puedeSubir el resultado de la operación resultante de si la persona es mayor de 6 años y además tiene una altura mínima de 120cm y mostrar por consola un mensaje como el siguiente: Puede subir a la atracción y el valor de la variable resultante.
20.	Introducir por pantalla el pase de una persona el cual puede ser “VIP”, “NORMAL” o “LIMITADO”, el saldo que dispone y guardarlos en variables separadas. En una variable llamada puedePasar guardar el resultado de la operación resultante de si la persona tiene pase “VIP” o si posee un saldo mayor a 1000. Mostrando un mensaje que diga: La persona puede pasar y el resultado de la variable.
*/
let tittle = document.getElementById('sectionTittle');
console.log(tittle);
tittle = document.getElementsByClassName('sectionTittle');
console.log(tittle);

//1
let miNombre = "juan";
//2
let miApellido = "fernández";
//3
let miEdad = "20";
//4
let miMascota = "Arthuro";
//5
let edadMascota ="1";
//6
console.log(miNombre);
console.log(miApellido);
console.log(miEdad);
console.log(miMascota);
console.log(edadMascota);
//7
let nombreCompleto = (miNombre+miApellido);
//8
let textoPresentacion = (miNombre + miApellido + miEdad + miMascota + edadMascota);
//9
let sumaEdades = (miEdad + edadMascota);
let restaEdades = (miEdad - edadMascota);
let productoEdades = (miEdad * edadMascota);
let divisionEdades = (miEdad / edadMascota);
//10
// miNombre = prompt("Digita tu nombre");
// miApellido = prompt("Digita tu apellido");
// miEdad = prompt("Digita tu edad");
// miMascota = prompt("Digita el nombre de tu mascota");
// edadMascota = prompt("Digita la edad de tu mascota");
    console.log(miNombre);
    console.log(miApellido);
    console.log(miEdad);
    console.log(miMascota);
    console.log(edadMascota);
    //7
    nombreCompleto = (miNombre+miApellido);
    //8
    textoPresentacion = (miNombre + miApellido + miEdad + miMascota + edadMascota);
//11
let alumno = {
    nombre: "John",
    apellido: "Doe",
    edad: 18,
    añoIngreso: 2023,
    curso: "2do",
};
console.table(alumno);
//12
let mascota = {
    nombre: "arthuro",
    apellido: "Doe",
    edad: 1,
    pelo:"lazio",
    dentadura: "grande",
};
console.table(mascota);

//13
let frutas = ["damasco", "sandia", "pera", "limon", "kiwi"];
console.log(frutas);
console.log(frutas[0]);
console.log(frutas[1]);
console.log(frutas[2]);
console.log(frutas[3]);
console.log(frutas[4]);
/*
14.	Crear un array llamado números con un mínimo de 5 elementos y mostrar por consola el array completo y cada uno de los elementos por separado.
15.	Crear un array llamado familia con un mínimo de 5 objetos y mostrar por consola el array completo y cada uno de los elementos por separado.
16.	Crear una variable llamada textoAleatorio formando una frase con el segundo elemento del array del punto 13, el cuarto elemento del punto 14 y el quinto objeto del array del punto 15.
17.	Utilizar prompt() para leer por pantalla mi edad y la edad de un compañero y mostrar por consola los resultados de comparar los valores y guardarlos en variables llamadas por ejemplo: edadesIguales, soyMayor, soyMenor, etc. Y mostrar mensajes en consola como los siguientes:
a.	Mi edad es igual a la de mi compañero: false
b.	Mi edad es mayor a la de mi compañero: true
c.	Mi edad es menor a la de mi compañero: false
18.	Compare su edad ingresada por pantalla con prompt() con el numero 18 y guardarlo en una variable llamada soyMayorDeEdad y mostrar por consola un mensaje que diga: Soy mayor de edad y el valor de la variable.
19.	Introducir por pantalla la edad y la altura de una persona y guardarlas en variables separadas y en una variable llamada puedeSubir el resultado de la operación resultante de si la persona es mayor de 6 años y además tiene una altura mínima de 120cm y mostrar por consola un mensaje como el siguiente: Puede subir a la atracción y el valor de la variable resultante.
20.	Introducir por pantalla el pase de una persona el cual puede ser “VIP”, “NORMAL” o “LIMITADO”, el saldo que dispone y guardarlos en variables separadas. En una variable llamada puedePasar guardar el resultado de la operación resultante de si la persona tiene pase “VIP” o si posee un saldo mayor a 1000. Mostrando un mensaje que diga: La persona puede pasar y el resultado de la variable.
*/
//14
let numeros = [4, 3, 2, 1, 0];
console.log(numeros);
console.log(numeros[0]);
console.log(numeros[1]);
console.log(numeros[2]);
console.log(numeros[3]);
console.log(numeros[4]);
//15
let familia = ["roberto", "georgina", "julian", "leonel", "angel"];
console.log(familia);
console.log(familia[0]);
console.log(familia[1]);
console.log(familia[2]);
console.log(familia[3]);
console.log(familia[4]);
//16
let textoAleatorio = frutas[1] + numeros[3] + familia[4];
//17
// let edadPropia = prompt("Digita tu edad");
// let edadAmigo = prompt("Digita la edad de tu amigo");
// let edadesIguales = (edadPropia===edadAmigo);
// console.log("Mi edad es igual a la de mi compañero: " + edadesIguales);
// let soyMayor = (edadPropia>edadAmigo);
// console.log("Mi edad es mayor a la de mi compañero " + soyMayor);
// let soyMenor = (edadPropia<edadAmigo);
// console.log("Mi edad es menor a la de mi compañero: " + soyMenor);
//18
// let edad = prompt("Digita tu edad");
// let mayor = (edad>18);
// console.log("Soy mayor de edad " + mayor);
//19
// let edadNueva = prompt("Digite su edad");
// let altura = prompt("Digite su altura en centimetros");
// let puedeSubir = ((edadNueva > 6) && (altura >= 120));
// console.log("Puede subir a la atracción " + puedeSubir);
//20

let nombreN = prompt("Digite su nombre");
let apellidoN = prompt("Digite su apellido");
let saldoN = prompt("Digite su saldo");
let paseN = prompt("Digite el tipo de pase: “VIP”, “NORMAL” o “LIMITADO”");
let persona = {
    nombre: nombreN,
    apellido: apellidoN,
    saldo: saldoN,
    pase: paseN,
};
let puedePasar = ((persona.pase === "VIP")||(persona.saldo >= 1000));
console.log("La persona puede pasar: " + puedePasar);



