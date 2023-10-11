import { d, local, root } from '../global.js';
import box from './box.js';
import board from './board.js';
import order from './order.js';
import { read, write} from '../storage.js';

function Checkers(){
    const section = Object.assign(d.createElement('section'), {
        id: 'checkers',
        className: "d-grid"
    });
    section.append(
        board(),
        Object.assign(d.createElement('button'), {
            className: 'btn btn-primary',
            innerHTML: 'Iniciar Juego',
            onclick: () => order()
        }),
        Object.assign(d.createElement('button'),{
            innerHTML: 'Guardar Partida',
            onclick: () => {
                write('board', d.getElementById('checkers-board').innerHTML, local);
                write('box', d.getElementById('checkers-box').innerHTML, local)
            }
        }),
        box(),
    );
    root.append(section);
}

export default Checkers;