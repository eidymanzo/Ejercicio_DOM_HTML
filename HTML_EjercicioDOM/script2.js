function saludar(nombre){
    return "Hola "+ nombre;
}
console.log(saludar("Davinia"));

const saludar2 = function (nombre){
    return "Hola "+ nombre;
}
console.log(saludar2("Davinia"));

const funciones = {
    funcion1: function (nombre){
        return "Hola "+ nombre;
    },
    funcion2: function (nombre){
        return "Adios "+ nombre;
    }
}
console.log(funciones.funcion2("Pedro"));

const saludar3 = (nombre, apellidos) => {
    return "Hola "+nombre +" "+apellidos;
}
console.log(saludar3("Ana", "Pérez Pérez"));


const saludar4 = (nombre) => {
    return "Hola "+nombre;
}
const saludar5 = nombre => {
    return "Hola "+nombre;
}
const saludar6 = nombre => "Hola "+nombre;

