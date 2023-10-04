import { d, root } from './global.js';
import Clock from './clock.js';
import { startTime, Start, stopTime } from './interval.js'

const clockTemplate = (name, time) => `
    <section id="timer">
        <h2>${name}</h2>
        <select>
            <option value="rem">Temporizador</option>
            <option value="add" selected>Cronometro</option>
        </select>
        <p>HH:mm:ss</p>
        <p class="clock">${time}</p>
        <div class="d-flex">
            <button id="start">Iniciar</button>
            <button id="stop">Detener</button>
        </div>
    </section>`;

const clockActions = () => {
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
                next: d.querySelector('.clock').innerHTML = timer.showTime() 
            }))
        }
        stop.onclick = () => stopTime()
    }
function renderClock(){
    // Instancia de Clock
    const obj = new Clock(0,0,0);
    root.innerHTML += clockTemplate('Reloj', '00:00:00');
    clockActions();
}

export default renderClock;