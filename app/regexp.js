/** 
Identificadores
    \w  | caracteres alfanumericos y guion bajo
    \d  | digitos
    \s  | espacios en blanco
    \W  | caracteres no alfanumericos
    \D  | no digitos
    \S  | no espacios en blanco
    [n] | cualquier caracter dentro de los corchetes

Cuantificadores
    *    | 0, 1 o mas coincidencias
    +    | 1 o mas
    ?    | 0 o 1
    {n}  | exactamente n
    {n,} | al menos n
    {n,m}| al menos n pero no mas de m

Posicion
    ^   | inicio de la cadena
    $   | final de la cadena
    \b  | limites de palabras (inicio o final)

Condicionales
    ?() | condicional
    =   | igualdad
    !   | negacion
    &   | y excluyente
    |   | o incluyente
    ?=  | coincidencia siguiente
    ?!  | no coincidencia siguiente
    ?<= | coincidencia siguiente
    ?<! | no coincidencia siguiente
*/

// 3 a 20 caracteres, sin espacios, sin numeros
regexp = /^[^\d\s]{3,20}$/ 
regexp.test("Cristian")         // true
regexp.test("_cristian")        // true
regexp.test("C215714n")         // false
regexp.test("Cristian Racedo")  // false
regexp.test("CristianRacedo")   // true

const 
    form = set('form'),
    username = set('input'),
    email = set('input'),
    phone = set('input')
    message = set('textarea'),
    submit = set('button');
Object.assign(form,{
    className: 'd-grid g-2 p-3'
})
Object.assign(username, {
    placeholder: 'Nombre de Usuario',    
    name: 'username',
    type: 'text'
})
Object.assign(email, {
    placeholder: 'Correo Electronico',
    name: 'email',
    type: 'email'
})
Object.assign(phone, {
    placeholder: 'Telefono',
    name: 'phone',
    type: 'tel'
})
Object.assign(message, {
    placeholder: 'Mensaje',
    name: 'message',
    className: 'p-2',
    style: 'min-height: 5rem'
})
Object.assign(submit, {
    innerHTML: 'Enviar',
})

form.append(username, email, phone, message, submit)
set(form, get('#footer'))

d.addEventListener('input', function (e) {
    console.log(e.target.type)
    regExr(e.target) ?
    e.target.style.border = "1px solid #3c6" :
    e.target.style.border = "1px solid #c33" 
})

function regExr(el){
    let regexp;
    switch(el.type){
        case 'text':
            regexp = /^\w{3,20}$/
        break;
        case 'tel':
            regexp = /^((\d{8,18})|(\(\d{2,5}\)(\d{3,6}|\-){2,5}))$/
        break;
        case 'email':
            regexp = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/
        break;
        default:
            regexp = /(\w*){20,50}/
    }
    return regexp.test(el.value)
}