let obj = {
    x: 100,
    y: 100,
    width: 50,
    heigt:50,
    texture: "img",
    color: "#000",
    text: "fff",
    size: "3",
    engine: "UE4.27",
    model: "208",
};
//apply new key&value
obj.new = "new";
//delete property
delete obj.new;
//array with keynames
let arrayKeys = Object.keys(obj);
console.log(arrayKeys);
// key&values arrays in array
let test = Object.entries(obj);
console.log(test);
//value array
let valuesArray = Object.values(obj);
console.log(valuesArray);