function Deck(deck=[]){
    ["♥️", "♦️", "♠️", "♣️"].map( suite => {
        for(let i = 2; i <= 10; i++) deck.push({
            suite, number: i, value: i,
            color: (suite == "♥️" || suite == "♦️") ? 'red' : 'black'
        });
        ["J", "Q", "K", "A"].map( number => deck.push({ 
            suite, number,
            value: (number == "A") ? 11 : 10,
        } ) )
    } )
    return deck;
}

function Box(){
    const box = Object.assign(document.createElement('div'),{
        className: 'box',
        style: 'min-height: 10rem; width: 100%; display: flex; justify-content: center; flex-wrap: wrap;'
    } ) ;
    const deck = Deck()
    deck.map( ({ suite, number }) => box.innerHTML +=
    `<div class="card ${(suite == "♥️" || suite == "♦️") ? 'red' : 'black'}" data-number="${number}" draggable="true">
        <p class="type">${suite}</p>
    </div>`
    )
    return box;
}

function BlackJack(){
    const blackJack = Box();
    root.append(blackJack);
}

export default BlackJack;