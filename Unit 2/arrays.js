
//crate an array

var myArray = [1,2,3,4,5];
// var myArray2 = new Array(1,2,3);

//Longitud de Arrays
const ln = myArray.length;
console.log(ln);

//Show Array
console.log(myArray);

//Iterative Arrays

for(let i = 0; i<ln; i++){
    console.log(myArray[i]);
    };
    console.log("---");
    for(let i in myArray){
    console.log(myArray[i]);
    };
    console.log("---");
    for(let i of myArray){
    console.log(myArray[i]);
    }
    
    //Adding elements;
    let data = [];
    console.log(data);
    const temp = 27;
    data.push(temp);
    data.push(12);
    data.push(60);
    console.log(data);
    
    //Insert first elementsdata.unshift(12);
    console.log(data);
    
    //Insert multiple data
    data.splice(2,0, 3, 4);     //data.splice fue creado originalmente para eliminar datos
    console.log(data);
    
    //Delate elements - Modificaciones de arreglos
    data.pop();     //.pop elimina el último dato;
    console.log(data);
    
    data.shift();   //Eliminar el primer elemento;
    console.log(data);

    data.splice(1,3, 500); 
    console.log(data);

    
var friends = ["Danna", "Luis", "Jorge"];
//Quiero copiar este Array

//var bestFriend = [...friends];  //Generar una copia, pero los cambios se hacen en la copia
var bestFriend = friends.slice(1);  //Cuando hay un número se omite el shift
console.log(friends);
//bestFriend.shift();

//console.log(friends);
console.log(bestFriend);

//Quiero restar dos unidades a todos los items;
var edades = [20, 22, 23, 24];
edades = edades.map(function (currentValue, index) {
    return currentValue - 2;

//edades = edades.map(currentValue => currentValue - 2);

//edades = edades.map(i => i - 2);
})

/*
for(let i=0; i<edades.length; i++){
edades[i] = edades[i]-2;
};
console.log(edades);
*/