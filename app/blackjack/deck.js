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

export default Deck;