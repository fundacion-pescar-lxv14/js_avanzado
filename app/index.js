const 
    jph = "https://jsonplaceholder.typicode.com",
    control = {
        user: 0,
        post: 0,
        album: 0
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
const section = ({ title, content, callback} ) => `
<h2 class="h3 text-center">${title}</h2>
<div>${ callback(content) }</div>
<a href="#">volver</a>`;

function usersList(data, list = ''){
    data.map(item => list += `
        <li class="list-group-item | col-12 col-md-8 col-lg-6 | d-flex flex-wrap | mx-auto">
            <p class="col d-grid m-0">
                <strong>${item.username}</strong>
                <span>${item.email}</span>
            </p>
            <button id="user-${item.id}" class="btn btn-primary rounded-pill">seleccionar</button>
        </li>`
    );
    return `<ul class="list-group">${list}</ul>`;
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
                    await getData({
                        url:`${jph}/${hash}`, 
                        callback: (res) => { control[hash] = res }
                    })
                    // Renderizamos el contenido
                    root.innerHTML = section({
                        title: el.innerHTML,
                        content: control[hash],
                        callback:  window[e.target.getAttribute('data-callback')]
                    });
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