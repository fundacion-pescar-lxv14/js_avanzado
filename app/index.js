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

    // Captura de elementos del DOM
    const 
        cL = 'classList',
        className = 'active',
        nav_menu = get('#nav .nav-menu'),
        nav_toggle = get('#nav .icon-toggle')

    // Funciones del DOM
    function toggle({el, btn, c, className}){
        el[cL].toggle(className) ?
            btn[cL].replace(c[0], c[1]) :
            btn[cL].replace(c[1], c[0])
    }

    // Eventos del DOM
    nav_toggle.addEventListener('click', (e) => toggle({
        btn: e.target, // elemento al que apunta el evento
        c: ['icon-toggle', 'icon-close'], // clases a reemplazar
        el: nav_menu, // elemento a modificar
        className, // corresponde a mismo nombre de clave y valor
    } ) );
    
} )
