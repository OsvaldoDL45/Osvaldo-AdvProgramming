const BMO = {
    name: "BMO",
    type: "Video Game Console",
    friends: ["Finn", " Jake", " Burbujita"],
    dance: function (){
        console.log("BMO is dancing...");
        return;
    },
};

for (key in BMO){
    console.log(`${key}: ${BMO[key]}`);
};

console.log(Object.keys(BMO));

console.log(Object.getOwnPropertyNames(BMO));