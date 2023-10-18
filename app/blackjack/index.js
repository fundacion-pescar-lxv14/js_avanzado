// Renderizado en el DOM
function BlackJack(){
    const section = document.createElement('section')
    section.setAttribute('id', 'blackjack')
    section.append(score(), Box(), Table(), Buttons());
    root.append(section)
    Actions();
}

export default BlackJack;