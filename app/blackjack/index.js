import { Score, Box, Table, Buttons } from './render.js';
import Actions  from './actions.js';

function BlackJack(){
    const section = document.createElement('section')
    section.setAttribute('id', 'blackjack')
    section.append(Score(), Box(), Table(), Buttons());
    root.append(section)
    Actions();
}

export default BlackJack;