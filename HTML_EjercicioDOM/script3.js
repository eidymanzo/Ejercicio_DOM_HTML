//<p>Hola</p>
//0. Pedir el texto al usuario
let textoU = prompt("Inserta el texto del párrafo");
//1. Creo un p
let etiqueta = document.createElement("p");
//2. Creo un nodo de texto con "Hola"
//let contenido = document.createTextNode("Hola");
let contenido = document.createTextNode(textoU);
//3. Añadir el nodo de texto al p
etiqueta.appendChild(contenido); 
//4. Añadir el p al div con id div1
document.getElementById("div1").appendChild(etiqueta);
//document.getElementsByTagName("div")[0].appendChild(etiqueta);