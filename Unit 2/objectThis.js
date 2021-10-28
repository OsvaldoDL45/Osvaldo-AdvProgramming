/*
const myObj = {
    name: "Osvaldo",
    age: 19,
    greeting: function(message) {
        console.log(`this is equal: ${JSON.stringify(this)}`);
        console.log(`${message} soy ${this.name} y tengo ${this.age}`);
    },
};
myObj.greeting("Hola Mundo"); 
for (let i of Object.values(myObj)){ //No puedo saber su 'key', es un dato puro
    console.log(i);
};
*/
const student = {
    name: undefined,
    age: undefined,
    greeting: function(message) {
        console.log(`this is equal: ${JSON.stringify(this)}`);
        console.log(`${message} soy ${this.name} y tengo ${this.age}`);
    },
};

const Carlos = Object.create(student);
Carlos.name = "Carlos Jose";
Carlos.age = 20;
Carlos.greeting("Hola Mundo");

const Cesar = Object.create(student);
Cesar.name = "Osvaldo De La Cruz";
Cesar.age = 20;
Cesar.greeting("Hello World");
Cesar.programming = function(problem) {
    //Logical and computing
    console.log("Programming solution for", problem);
};

Cesar.programming("Create an amazing Web application");

console.log(this); //Global - todas las funciones que nos permite usar