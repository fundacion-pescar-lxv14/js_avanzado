// Funcion callBack que devuelve el elemento coincidente
const getfromArray = (array, match, callBack) => { 
    for(let item of array) 
    if(item.classList.contains(match)) 
    return callBack(item); 
}
// Funciones que determinan los elementos anteriores y siguiente
const prev = (el) => (el.previousElementSibling || el.parentNode.lastElementChild)
const next = (el) => (el.nextElementSibling || el.parentNode.firstElementChild)

// Funcion que cambia el elemento activo
const changeItem = (array, type) => {
    // Determinar nuevo elemento activo
    const el = 
    type === "prev" ? getfromArray(array, 'active', prev) : 
    type === "next" ? getfromArray(array, 'active', next) : 
    array[type];
    // eliminar la clase del elemento anterior
    getfromArray(array, 'active', (el)=> el.classList.remove('active'));
    // Asignar la clase al nuevo elemento
    el.classList.add('active');
}

function galleryActions(){
    // Captura todas las galerias del DOM
    get('.gallery', 1).forEach(gallery => {
        // Captura los elementos de cada galeria individualmente
        const images = gallery.querySelectorAll('.gallery-item');
        const buttons = [
            gallery.querySelectorAll('button[class*="icon-"]'),
            gallery.querySelectorAll('.gallery-controls button')
        ]
        // Asigna la acciones a los botones
        buttons.forEach(button => button.forEach( (btn,i) =>
            btn.addEventListener('click', () => {
                // Cambia el elemento activo (imagen y boton)
                changeItem(images, btn.getAttribute('title') ?? i);
                changeItem(buttons[1], btn.getAttribute('title') ?? i)
            } )
        ) )
    } )
}
// Ejecuta la funcion
galleryActions();