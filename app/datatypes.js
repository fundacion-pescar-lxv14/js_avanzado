const datatypes = {
    string: 'Cadena de Texto',
    number: 18,
    float: 3.1416,
    boolean: true,
    undefined: undefined,
    null: null,
    array: "['html', 'css', 'js']",
    object: "{ nombre: 'cristian', edad: 33, instructor: true }",
    function : () => { console.log('function') },
}

/** para recorrer un objeto es necesario 
 *  identificar sus indices o elementos y trabajarlos 
 *  en formatos de array asi podremos utilizar 
 *  los metodos forEach o map respectivamente.
*/
function createTable(title){
    const table = set('table');
    table.innerHTML = `<caption>${title}<caption>
        <thead>
            <tr><th>Tipo</th><th>Ejemplo</th></tr>
        </thead>
        <tbody>
            ${ createRows(datatypes) }
        </tbody>`
    // Anidamos la tabla a la etiqueta con id datatypes
    set(table, get('#datatypes'))
}

function createRows(obj, tbody= ''){
    // Recorremos el objeto y creamos las filas
    Object.keys(obj).map(key => tbody +=`
        <tr>
            <td>${key}</td>
            <td>${obj[key]}</td>
        </tr>`
    )
    // Devolvemos las filas creadas
    return tbody;
}

createTable("Javascript Datatypes");