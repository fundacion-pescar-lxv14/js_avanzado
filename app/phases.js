d.addEventListener('click', function (e) {
    const painted = e.target.style.backgroundColor === ''
    const paint = (status) => status ? '' : 'gold';
    /** Fase 1
     * Capturing: Se recorre el arbol DOM desde el nodo mas externo al mas interno.
     * Fase 2
     * Target: Se ejecuta el evento en el nodo objetivo
     * Fase 3
     * Bubbling: Se recorre el arbol DOM desde el nodo mas interno al mas externo.
    */
    if(e.target.classList.contains('paint')){
        e.target.style.backgroundColor = paint(!painted);
    }
} )
// Captura masiva de arrays de elementos
const targets = [get('li',1), get('a',1), get('ul', 1)]
// Mapeo de los arrays de elementos, y asignación de eventos
targets.map( target => target.forEach(el => 
    el.addEventListener( 'click', function (e) {
        console.log(this, e.target)
    }
)))