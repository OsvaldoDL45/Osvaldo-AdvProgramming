var myInt = 24;
var myFloat = 3.1416;
var myString = "Osvaldo";
var myNull = null;

//TypeCasting: imp----exp
console.log(typeof myFloat);
myFloat = String(myFloat);
console.log(typeof String(myFloat));

myString = Boolean(myString);
console.log(myString);

//Cuando se convierte en boolean se arroja a pantalla un 'true' o 'false'
//FALSE VALUES!
console.log(Boolean(" ")); //true por un espacio
    console.log(Boolean("")); //false porque no hay ningún caracter
//Cuando convertimos un dtao a 0
    console.log(Boolean(0));
//Not is a Number? ---> NaN
    console.log(Boolean(NaN));
//undefined
    console.log(Boolean(undefined));
//En datos nulos
    console.log(typeof myNull);
    console.log(Boolean(myNull));
//En datos falsos
    console.log(Boolean(false));

//TRUE VALUES!
    console.log(Boolean("Cesar"));
    console.log(Boolean(5));
    console.log(Boolean({key:"5"}));
    console.log(Boolean( [] ));
    console.log(typeof myNull);

//When is a NaN
    console.log( isNaN(Number("5x")));

//TypeCasting Expli Methods
    console.log(Number.parseInt(myString));
    console.log(Number.parseFloat(myString));

//TypeCasting Cohersion implicit
var result = "Hola Mundo"; //="Hola" + "Mundo"
var resultNumberString = 2 + "Hola"; //Suma de un número a un string
var resultNumberRemainder = 2 - "22"; //JavaScript toma las decisiones sin que el usuario se de cuenta* 
console.log(resultNumberString);
console.log(resultNumberRemainder);