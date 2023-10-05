import { d, root } from './global.js';
import Clock from './clock.js';
import { startTime, Start, stopTime } from './interval.js'

const clockTemplate = (name, time) => `
    <section id="timer" class="d-grid">
        <h2>${name}</h2>
        <select class="form-control">
            <option value="rem">Temporizador</option>
            <option value="add" selected>Cronometro</option>
        </select>
        <p>HH:MM:ss</p>
        <p class="clock">${time}</p>
        <div class="d-flex">
            <button id="start" class="btn">Iniciar</button>
            <button id="stop" class="btn">Detener</button>
        </div>
    </section>`;

const clockActions = () => {
    let obj = new Clock(0,0,0);
    const 
        start = d.getElementById('start'),
        stop = d.getElementById('stop');
        
    start.onclick = () => {
        const fn = d.querySelector('#timer select').value;
        // Evitamos que Continue el intervalo
        stopTime();
        // Iniciamos un Nuevo Intervalo
        startTime( () => Start({ 
            obj, fn, 
            c: fn == 'add' ? 0 : 59, 
            next: d.querySelector('.clock').innerHTML = obj.showTime() 
        }))
    }
    stop.onclick = () => {
        stopTime()
        obj = new Clock(0,0,0);
        d.querySelector('.clock').innerHTML = obj.showTime()
    }
}
function renderClock(){
    // Instancia de Clock
    root.innerHTML += clockTemplate('Reloj', '00:00:00');
    clockActions();
}

export default renderClock;