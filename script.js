import { barcelona, roma, paris, londres } from "./ciudades.js";

// Obtener los elementos del DOM
let enlaces = document.querySelectorAll("a");
let tituloElemento = document.getElementById("titulo");
let subTituloElemento = document.getElementById("subtitulo");
let parrafoElemento = document.getElementById("parrafo");
let precioElemento = document.getElementById("precio");

// Evento CLICK a cada enlace
enlaces.forEach(function (enlace) {
  enlace.addEventListener("click", function () {
    // Remover active de todos los enlaces
    enlaces.forEach(function (enlace) {
      enlace.classList.remove("active");
    });

    // Agregar la clase active al enlace actual
    this.classList.add("active");

    // Obtener contenido según enlace
    let contenido = obtenerContenido(this.textContent.trim());

    // Mostrar el contenido en el DOM
    if (contenido) { // Verifica si el contenido no es undefined
      tituloElemento.innerHTML = contenido.titulo;
      subTituloElemento.innerHTML = contenido.subtitulo;
      parrafoElemento.innerHTML = contenido.parrafo;
      precioElemento.innerHTML = contenido.precio;
    } else {
      console.error("Contenido no encontrado para:", this.textContent);
    }
  });
});

// Función para traer la información desde ciudades.js
function obtenerContenido(enlace) {
  let contenido = {
    Barcelona: barcelona,
    Roma: roma,
    París: paris,
    Londres: londres,
  };
  return contenido[enlace];
}
