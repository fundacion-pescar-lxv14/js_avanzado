import { Box, Table, Score } from './render.js';
import { game } from './rules.js';
const stop = () => game.score >= 21;

function updateScore() {
    const box = document.querySelector('#databox');
    box.innerHTML = score().innerHTML;
}
// Eventos de Botones
function Actions(){
    const 
        newGame = document.querySelector('#newGame'),
        newCard = document.querySelector('#newCard'),
        bet = document.querySelector('#bet'),
        deal = document.querySelector('#deal'),
        restart = document.querySelector('#restart');
    
    newGame.onclick = () => startGame();
    newCard.onclick = () => getCard();
    bet.onclick = () => makeBet();
    deal.onclick = () => makeDeal();
    restart.onclick = () => reset();

}
// Acciones particulares
function startGame(){
    const 
        box = document.querySelector('.box'),
        table = document.querySelector('.gamemat')
    game.newGame()
    box.innerHTML = Box().innerHTML;
    table.innerHTML = Table().innerHTML;
    getCard(2);
    updateScore();
}
function reset(){
    game.restart();
    startGame();
}
function getCard (limit = 1){
    if(stop()) return;
    let count = 0;

    for(let i = 0; i < limit; i ++){
    const 
        cards = document.querySelectorAll('.box .card'),
        cardSpace = document.querySelectorAll('.card-space:not(.occupied)');
        const current = cards[cards.length - 1]
        if(cardSpace.length < 1) {
            alert('no hay mas espacio')
            return;
        }
        cardSpace[0].append(current);
        cardSpace[0].classList.add('occupied');
        game.newCard(parseInt(current.getAttribute('data-value')))
        
        setTimeout( () => { if(stop()){ 
            if (count == 0) alert(game.message);
            return
        }}, 100);
        console.log(game)
    }
    updateScore();
}
function makeBet(){
    let sure = confirm('¿Deseas aumentar la apuestas?')
    if(sure && game.money > 0) game.bet()
    else if(game.money == 0) alert('no tienes dinero')
    updateScore();
}
function makeDeal(){
    let sure = confirm('¿Deseas realizar una apuesta?')
    if(sure){
        game.deal(); 
        alert(game.message);
    }
    updateScore();
}
export default Actions;