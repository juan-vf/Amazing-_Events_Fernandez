let arrayNumbers = [46, 311, 1, 548, 1001, 641, 2, 57, 684, 8, 1000];
let arrayStrings = ["jota","ka","pe","de","naaaaaaaaa","vi","res","g4"];
let arrayObjets = [
    {name: "a", lastName:"6", age: 89, size: 213, gender:"female"},
    {name: "h", lastName: "b", age: 19, size: 13, gender:"male"},
    {name: "j", lastName: "aw", age: 59, size: 23, gender:"female"},
    {name: "qw", lastName: "7", age: 29, size: 175, gender:"female"}];
// function plusArrays(array){
//     let valor;
//     for (let index = 0; index < array.length; index++) {
//         valor = (valor + array[index]);
//     }
//     return valor;
// }
// let functionValue = plusArrays(arrayNumbers);
// console.log(functionValue);
//3
// function showValue(key, array){
//     let arrayObj = [];
//     for (let i = 0; i < array.length; i++) {
//         let obj = array[i];
        
//         let objValue = obj[key];
//         arrayObj.push(objValue)
//     }
//     return arrayObj
// }
// function showValue2(key, array){
//     let arrayObj2 = [];
//     for (const obj of array) {
//         let newValue = obj[key];
//         arrayObj2.push(newValue);
//     }
//     return arrayObj2;
// }
// console.log(showValue("lastName", arrayObjets));
// console.log(showValue2("name", arrayObjets));
//4
// function plusOdd(array){
//     let plus = 0;
//     for (let i = 0; i < array.length; i++) {
//         let value = array[i];
//         let test = (value % 2)
//         if(test != 0){
//             plus += value
//         }
//     }
//     return plus;
// }
// console.log(plusOdd(arrayNumbers));
//5
// function showStrings10(array){
//     let arrayWords = [];
//     for (let i = 0; i < array.length; i++) {
//         let value = array[i]
//         let test = value.length;
//         if(test >=10){
//             arrayWords.push(value);
//         }
//     }
//     return arrayWords;
// }
// console.log(showStrings10(arrayStrings));
//6
// function showSizeAge(age, size, array){
//     let arrayContainer = [];
//     for (let i = 0; i < array.length; i++) {
//         let obj = array[i];
//         let sizeObj = obj.size;
//         let ageObj = obj.age;
//         if(sizeObj < size && ageObj < age){
//             arrayContainer.push(obj);
//         }
//     }
//     return arrayContainer;
// }
// console.log(showSizeAge(30, 170, arrayObjets));
//7
// function smallerNumber(array){
//     let smallerNumber = array[0];
//     for (let i = 1; i < (array.length); i++) {
//         let numTwo = array[i];
//         if(numTwo > smallerNumber){
//             smallerNumber = smallerNumber;
//         }else{
//             smallerNumber = numTwo;
//         }
//         console.log(smallerNumber, numTwo);
//     }
//     return smallerNumber;
// }
// console.log(smallerNumber(arrayNumbers));
//8
// function biggerNumber(array){
//     let biggerNumber = array[0];
//     for (let i = 1; i < (array.length); i++) {
//         let numTwo = array[i];
//         if(numTwo < biggerNumber){
//             biggerNumber = biggerNumber;
//         }else{
//             biggerNumber = numTwo;
//         }
//         console.log(biggerNumber, numTwo);
//     }
//     return biggerNumber;
// }
// console.log(biggerNumber(arrayNumbers));
//9
// function firstParNumber(array){
//     let par;
//     let i = 0;
//     do {
//        let value = array[i];
//        console.log(value);
//        par = (value%2);
//        console.log(par);
//        if(par === 0){
//         par = value;
//        }
//        i++;
//     } while (par === 0);
//     return par;
// }
// console.log(firstParNumber(arrayNumbers));
//10
// function firstAgeSize(array){
//     let key = false
//     let objResponse;
//     let i = 0;
//     do {
//         let obj = array[i]
//         let sizeObj = obj.size;
//         let ageObj = obj.age;
//         if(ageObj < 30 && sizeObj > 170){
//             key = true;
//             objResponse = obj;
//         }
//         i++;
//     } while (key != true);
//     return objResponse;
// }
// console.log(firstAgeSize(arrayObjets));
//11
// function femaleMale(array){
//     let total = array.length
//     let m = 0;
//     let f = 0;
//     let perM;
//     let perF;
//     let objT = {};
//     for (let i = 0; i < array.length; i++) {
//         let value = array[i];
//         if(value.gender === "female"){
//             f++;
//         }else{
//             m++;
//         }
//     }
//     perM = ((m * 100) / total);
//     perF = ((f * 100) / total);
//     objT = {
//         m: perM,
//         f: perF,
//     }
//     return objT
// }
// console.log(femaleMale(arrayObjets));