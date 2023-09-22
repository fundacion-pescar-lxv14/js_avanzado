let clock;
const p = set("p");
set(p, get('#footer'))
// Funcion que ejecuta el intervalo
const getTime = (el) => clock = setInterval( () => {
    let time =  new Date();
    el.innerHTML = time.toLocaleTimeString()
}, 1000);
// Funcion que detiene el intervalo
const stopTime = (iv) => clearInterval(iv);
getTime(p);