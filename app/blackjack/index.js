import Rules from './rules.js';

function Deck(deck=[]){
    ["♥️", "♦️", "♠️", "♣️"].map( suite => {
        for(let i = 2; i <= 10; i++) deck.push({
            suite, 
            number: i, 
            value: i,
        });
        ["J", "Q", "K", "A"].map( number => deck.push({ 
            suite, number,
            value: (number == "A") ? 11 : 10,
        } ) )
    } )
    return shuffle(deck);
}
function shuffle(arr){
    for(let i = arr.length - 1; i > 0; i--){
        const r = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[r]] = [arr[r], arr[i]]
    };
    return arr
}
function Box(){
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
function Table(){
    const table = Object.assign(document.createElement('div'),{
        className: 'gamemat d-flex',
        style: 'justify-content: center; flex-wrap: wrap; gap: 1rem'
    })
    for (let i = 0; i < 5; i++){
        table.innerHTML += `<div class="card-space"></div>`
    }
    return table;
}
function Buttons(){
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

const game = new Rules();

function Actions(){
    const 
        newGame = document.querySelector('#newGame'),
        newCard = document.querySelector('#newCard'),
        bet = document.querySelector('#bet'),
        deal = document.querySelector('#deal'),
        restart = document.querySelector('#restart');
    
    newGame.onclick = () => {
        game.newGame();
        getCard(2)
    }
    newCard.onclick = () => {
        getCard();
        game.score >= 21 && deal.click();
    }

}
function getCard (limit = 1){
    for(let i = 0; i < limit; i ++){
    const 
        cards = document.querySelectorAll('.box .card'),
        cardSpace = document.querySelectorAll('.card-space:not(.occupied)');
        const current = cards[cards.length - 1]
        game.newCard(parseInt(current.getAttribute('data-value')))
        cardSpace[0].append(current);
        cardSpace[0].classList.add('occupied');
        console.log(game.score)
    }
}

function BlackJack(){
    const section = document.createElement('article')
    section.append(Box(), Table(), Buttons());
    root.append(section)
    Actions();
}

export default BlackJack;