import { d } from '../global.js';
import checker from './checker.js';

function box(){
    const colors = ['red', 'black'];
    const box = Object.assign(d.createElement('div'), { 
        id: 'checkers-box',
        className: 'box'
    })
    colors.forEach( (color, i) => { 
        const player = i + 1;
        for(let index = 1; index <= 12; index++){
        box.append(checker({color, player, index}))
    } } )
    return box;
}

export default box;