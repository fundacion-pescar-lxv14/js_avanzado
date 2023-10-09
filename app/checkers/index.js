import { d, root } from '../global.js';
import box from './box.js';
import board from './board.js';

function Checkers(){
    const section = Object.assign(d.createElement('section'), {className: "d-grid"});
    section.append(
        board(),
        box(),
    );
    root.append(section);
}

export default Checkers;