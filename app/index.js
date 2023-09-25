const jph = "https://jsonplaceholder.typicode.com";

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
    ajax({
        url: jph+'/users',
        callback: (data) => {
            const users = Array.from(data).map((user) => {
                return `<li>${user.name}</li>`
            });
            root.innerHTML = `<ul>${users.join('')}</ul>`;
        }
    })
});