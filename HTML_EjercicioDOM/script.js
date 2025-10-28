//Número de enlaces de la página
let enlaces = document.getElementsByTagName("a");
console.log(enlaces.length);
//Dirección a la que enlaza el penúltimo enlace
console.log(enlaces[enlaces.length-2].href);
//Numero de enlaces que enlazan a http://prueba
//const recuento =enlaces.filter(item => item.href == 'http://prueba/').length;
//console.log(typeof enlaces);
/*enlaces.forEach(e => {
    console.log(e.href);
});*/
let cont = 0;
for (let i = 0; i < enlaces.length; i++) {
    if(enlaces[i].href == "http://prueba/"){
        cont++;
    }
}
console.log(cont);

//Número de enlaces del tercer párrafo
let nEnlacesP3 = document.getElementsByTagName("p")[2].getElementsByTagName("a").length;
console.log(nEnlacesP3);

//Todos los a que estén dentro de un p
let enlaces2 = document.querySelectorAll("p a");