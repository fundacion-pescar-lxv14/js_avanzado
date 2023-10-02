const 
    jph = "https://jsonplaceholder.typicode.com",
    control = {
        user: null,
        post: null,
        album: null,
        todo: null
    },
    events = ['click', 'input', 'check', 'change', 'select', 'submit']
//#consultas asincronas 
async function getData({url, method = 'GET', callback }){
    try{
        const res = await fetch(url, { method } );
        callback(await res.json());
    }
    catch(e){
        console.error(e)
    }
}
//#consultas asincronas
//#funciones de renderizado 
// Section principal
const section = ({ title, content, callback} ) => `
    <h2 class="h3 text-center">${title}</h2>
    <div>${ callback(content) }</div>`;
// Control de Errores
const error = (e = 'No se ha Iniciado sesion') => section({ 
    title: 'Lo sentimos, ha ocurrido un error', 
    content: e, 
    callback: (e) => `
        <p class="alert alert-danger alert-dismissible">${e} 
            <button class="btn-close float-end"></button>
        </p>`
});
// Listado de Objetos
function renderList(item, li=''){
    Object.keys(item).map(k => 
        li+= typeof item[k] == 'object' ? 
        renderList(item[k]) :
        `<li><strong>${k}:</strong> ${item[k]}</li>`)
    return `<ul>${li}</ul>`
}
// Lista de Usuarios
function usersList(data, list = ''){
    data.map(item => list += `
        <li class="list-group-item | col-12 col-md-10 col-lg-8 | d-flex flex-wrap | mx-auto">
            <p class="col d-grid m-0">
                <strong>${item.username}</strong>
                <em>${item.email}</em>
            </p>
            <button id="user-${item.id}" class="btn btn-primary rounded-pill">seleccionar</button>
        </li>`
    );
    return `<ul class="list-group">${list}</ul>`;
}
// Tareas del Usuario
function userTodos(data, th = '', tr = '', td = '') {
    // Extraccion de Cabeceras de Tabla
    Object.keys(data[0]).map(t => th+=`<th>${t}</th>`)
    // Identificacion de Filas y Celdas
    data.map(item => ( 
        Object.values(item).map(v => 
        td+= (typeof v == 'object') ? 
            `<td>${renderList(item)}</td>` : 
            `<td>${v}</td>`
        ),
        tr += `<tr>${td}</tr>`,
        td=''
    ));
    // Renderizado condicional de Tabla 
    return control.user ?
    `<div class="container table-responsive">
        <table class="table table-striped table-hover table-sm">
            <caption>Table de datos</caption>
            <thead><tr>${th}</tr></thead>
            <tbody>${tr}</tbody>
        </table>
    </div>`
    : error() 
}
function userAlbums(data){
    return control.user ?
    data.map(item => 
    `<article>
    </article>`
    ).join('') : error()
    
}
// Publicaciones del Usuario
function userPosts(data, post = ''){
    control.user ?
    data.map(item => post +=
    `<article id="post-${item.id}" class="card | col-md-8 mx-auto my-2">
        <h3 class="card-header">${item.title}</h3>
        <p class="card-body">${item.body}</p>
        <footer class="card-footer ps-4 list-group list-group-flush">
        </footer>
    </article>`
    ) : post += error()
    return post;
}
// Comentarios por Publicacion
async function getComments(){
    // Captura de Articulos con id "post-n"
    const posts = document.querySelectorAll('article[id^="post-"]');
    posts.forEach(async (post) => {
        let data = await fetch(`${jph}/comments?postId=${post.id.split('-')[1]}`);
        data = await data.json();
        data.map(item => post.querySelector('footer').innerHTML += 
        `<article class="list-group-item">
            <div class="row align-items-start">
            <img alt="..." class="rounded-circle p-2 col-1 bg-dark">
            <p class="col">
                <strong>${item.name}</strong> 
                ${item.body}
                </p>
            <div>
            <address>
                <a href="mailto:${item.email}">${item.email}</a>
            </address>
        </article>`
    ) } )
}

//#funciones de renderizado
//#eventos del DOM
document.addEventListener('DOMContentLoaded', () => {
    events.forEach(ev => document.addEventListener(ev, async (e) => {
        const el = e.target;
        const root = document.getElementById('root');
        // Determina la accion segun el tipo de elemento
        switch(el.tagName){
            case 'A':
                const hash = el.href.split('#')[1];
                if (el.classList.contains('nav-link')){
                    // Evitamos la recarga y cambiamos la url
                    e.preventDefault();
                    window.history.pushState({},'',`/${hash}`);
                    // Obtenemos los datos para control
                    const condition = hash !='users' && control.user > 0  ? `?userId=${control.user}` : '';
                    await getData({
                        url:`${jph}/${hash}/${condition}`, 
                        callback: (res) => { control[hash] = res }
                    })
                    // Renderizamos el contenido
                    root.innerHTML = section({
                        title: el.innerHTML,
                        content: control[hash],
                        callback: window[e.target.getAttribute('data-callback')]
                    });
                    // Renderizado de Comentarios
                    getComments();
                }
            break;
            case 'BUTTON':
                if (el.parentNode.classList.contains('list-group-item')){
                    const 
                        id = el.id.split('-');
                        control[id[0]] = id[1],
                        window.history.pushState({},'', `/${id[0]}/${id[1]}`);
                }
            break;
            case 'INPUT':
            case 'TEXAREA':

            break;
        }
    } ) )
});
//#eventos del DOM