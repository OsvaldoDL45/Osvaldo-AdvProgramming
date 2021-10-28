//Osvaldo De La Cruz - Embedded 3A

const device = {
    sensorModel: "HC04",
    count: 0,
    date: new Date(),
};

console.log(device.date);
console.log(device.date.getFullYear(), typeof device);

const deviceJSON = JSON.stringify(device);
console.log(deviceJSON, typeof deviceJASON);

//Crear un json desde code//
const myJson = '{"name": "Osvaldo", "edad": "19", "friends": ["Angel", "Cesar"], "isManager": false}';
console.log(myJson, typeof myJson);

//Manipular json format
//Convertir un 'json' a un objeto en JS
const myObj = JSON.parse(myJson);
console.log(myObj.name);