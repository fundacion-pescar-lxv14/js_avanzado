/** Declaraciones */
const 
    // Elementos Globales
    d = document,
    w = window,
/** Funciones */
    // Captura de elementos del DOM
    get = (element, array) => 
        array ? d.querySelectorAll(element) : d.querySelector(element),
    // Creación y anidacion de elementos del DOM
    set = (element, parent) => 
        parent ? parent.appendChild(element) : d.createElement(element),
    // Eliminación de elementos del DOM
    del = (element, text) => 
        text ? element.innerHTML = '' : d.removeChild(element)
/** Eventos */
// Carga Completa del Arbol de elementos del DOM
d.addEventListener('DOMContentLoaded', function () {
    console.log('Pagina Cargada Completamente');

} )
