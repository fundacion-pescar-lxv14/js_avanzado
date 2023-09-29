const jph = "https://jsonplaceholder.typicode.com";
const control = {
    user: 3,
    post: 0,
    album: 0
}

function ajax({ url, method = 'GET', callback }){
    const xhr = new XMLHttpRequest();
    xhr.open(method, url);
    // Monitoreo de la carga
    xhr.addEventListener('progress', (e) => {
        callback(e.loaded + "/" + e.total);
    });
    // Control de errores
    xhr.addEventListener('error', (e) => {
        callback(e);
    } );
    // Finalización de la carga
    xhr.addEventListener('load', () => {
        const data = JSON.parse(xhr.responseText);
        callback(data);
    } );
    xhr.send();
}

document.addEventListener('DOMContentLoaded', () => {
    const root = document.getElementById('root');

    // Asignacion de acciones del evento Click (Bubbling)
    document.addEventListener('click', (e) => {
        // Evitamos recargar de la pagina
        e.preventDefault();
        // Asiganmos la accion segun el elemento
        switch(e.target.tagName){
            case 'A':
                const 
                    url = e.target.href,
                    hash = url.split('#')[1];
                // Verificamos que pertenezca a la navegacion
                if (e.target.classList.contains('nav-link'))
                    window.history.pushState('', '', `/${hash}`);
                // Verificamos que tenga un callback
                e.target.getAttribute('data-callback') ?
                    ajax({
                        url: `${jph}/${hash}/${control.user}`,
                        callback: window[e.target.getAttribute('data-callback')]
                    }): getError();
            break;
            case 'BUTTON':

            break;
        }
    })
});

/* Renderizado de elementos del DOM */
// Lista de Usuarios
function usersList (data){
    const users = Array.from(data).map((user) => {
        return `
            <li class="list-group-item d-flex justify-content-between">
                ${user.name}
                <button id="user-${user.id}" class="btn btn-primary">Seleccionar</button>
            </li>`
    });
    root.innerHTML = `<ul class="list-group">${users.join('')}</ul>`;
    buttonActions('.list-group-item button');
}

function section(title, data, callback){
    return `
    <section class="d-flex flex-wrap">
        <h2 class="w-100">${title}</h2>
            ${ callback(data) }
        <a href="#" class="btn btn-primary">Volver</a>
    </section>
    
        `;	
}
function filter (data, key) {
    return data.filter(item => item[key] == control.user)
}
// Albumes de Fotos
async function userAlbums(data){
    if (control.user){
        const albums = await filter(data, 'userId');
        root.innerHTML = section('Albumes de Fotos', albums, renderAlbum)
    }
    else {
        root.innerHTML = `<p class="alert alert-danger">Debe seleccionar un usuario</p>`;
    }
}

function renderAlbum (albums){
    return albums.map((album,i) =>
    `<div class="card col-12 col-md m-1 shadow">
        <p class="card-header">${album.title}</p>
        <img class="card-body" style="min-height: 100px;">
    </div>
    ${(i + 1) % 2 === 0 ? `<div class="d-block d-lg-none w-100"></div>` : ''}
    ${(i + 1) % 3 === 0 ? `<div class="d-none d-lg-block w-100"></div>` : ''}`
).join('') 
}

async function userPosts(data){
    const posts = await filter(data, 'userId');
    console.log(posts);
    root.innerHTML = section('Publicaciones del Usuario', posts, renderPost);
}
function renderPost(posts){
    return posts.map(post => `
        <article id="post-${post.id}" class="card my-2">
            <header class="card-header">
                <img src="assets/icon/github.svg" class="rounder-circle col-1 me-3"
                <h3 class="card-title">${post.title}</h3>
            </header>
            <p class="card-body">${post.body}</p>
            <footer class="card-footer">
                <button class="btn btn-dark d-block ms-auto">Comentar</button>
            </footer>
        </article>
    `).join('')
}

function buttonActions (query){
    const buttons = document.querySelectorAll(query);
    buttons.forEach(btn => btn.addEventListener('click', (e) => {
            const 
                key = e.target.id.split('-')[0],
                value = e.target.id.split('-')[1];
            control[key] = value
            window.history.pushState('','',`/${key}/${value}` )
        } ) 
    ) 
}