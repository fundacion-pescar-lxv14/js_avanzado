/* READY STATE
 *  0: consulta no inicializada
 *  1: conexión establecida
 *  2: consulta recibida
 *  3: procesando consulta
 *  4: consulta finalizada
 */

/*
    STATUS
    0: información
    100: redirecciones
    200: OK
    300: peticiones de redirección
    400: error del cliente
    500: error del servidor
*/
const section = set('section');
section.innerHTML = `<h2>Solicitudes al Servidor</h2>`;
// readyState 0
const xhr = new XMLHttpRequest();
// readyState 1
xhr.open('GET', 'docs/ajax.txt');
// readyState 3
function DOMload(content){
    section.innerHTML += `<p>${content}</p>`;
    set(section, get('body'));
}
xhr.addEventListener('load', () => {
    // readyState 4
    if (xhr.status == 200 && xhr.readyState == 4) {
        DOMload(xhr.responseText)
    } 
} )
// readyState 2
xhr.send();

/* otra solicitud (1 seg mas tarde)*/
setTimeout(() => {
    xhr.open('GET', 'docs/spa.txt');
    xhr.send();
}, 1000);