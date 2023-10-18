import { game } from './rules.js';
import Deck from './deck.js';

export function Score(data=''){
    const headers = Object.keys(game);
    const list = Object.assign(document.createElement('ul'),{
        id: "databox",
        className: 'unstyled'
    });
    headers.map(key => { if (key != 'message') 
        list.innerHTML+=`<li><strong>${key}</strong>: ${game[key]}</li>`
    } )
    return list;
}
export function Box(){
    const box = Object.assign(document.createElement('div'),{
        className: 'box',
        style: 'min-height: 10rem; width: 100%; display: flex; justify-content: center; flex-wrap: wrap;'
    } ) ;
    const deck = Deck()
    deck.map( ({ suite, number, value }) => box.innerHTML +=
    `<div class="card ${(suite == "♥️" || suite == "♦️") ? 'red' : 'black'}" data-number="${number}" data-value="${value}" draggable="true">
        <p class="type">${suite}</p>
    </div>`
    )
    return box;
}
export function Table(){
    const table = Object.assign(document.createElement('div'),{
        className: 'gamemat d-flex',
        style: 'justify-content: center; flex-wrap: wrap; gap: 1rem'
    })
    for (let i = 0; i < 5; i++){
        table.innerHTML += `<div class="card-space"></div>`
    }
    return table;
}
export function Buttons(){
    return Object.assign(document.createElement('div'),{
        className: 'd-grid',
        style: 'padding: 1rem; grid-template-columns: repeat(auto-fit, minmax(min(100%,10rem), 1fr))',
        innerHTML: `
            <button id="newGame">Nueva Partida</button>
            <button id="newCard">Pedir Carta</button>
            <button id="bet">Apostar</button>
            <button id="deal">Acordar</button>
            <button id="restart">Volver a Empezar</button>`
    })
}