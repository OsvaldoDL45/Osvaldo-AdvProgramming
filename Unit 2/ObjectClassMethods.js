
const student = {
    name: "Pedro",
    age: 19,
    greeting: function(message) {
        console.log(`this is equal: ${JSON.stringify(this)}`);
        console.log(`${message} soy ${this.name} y tengo ${this.age}`);
    },
};

const cpyStudent = Object.assign(student); //Generar una copia de las mismas direcciones con la misma info? - {...student} también se puede usar..
cpyStudent.name = "Fernando";
console.log(student);
console.log(cpyStudent);

/*
const cpyStudent = Object.create(student); //Generar una copia de las mismas direcciones con la misma info?
cpyStudent.name = "Fernando";
console.log(student);
console.log(cpyStudent)
*/