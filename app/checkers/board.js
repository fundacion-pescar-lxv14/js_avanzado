import { d } from '../global.js';
import { 
    coord,
    empty, 
    isCell,
    move
} from './conditions.js';

function createCell(row, col){
    return Object.assign(d.createElement('td'), {
        id: `${row}${col}`,
        ondragover:(e) => e.preventDefault(),
        ondrop: (e) => {
            const id = e.dataTransfer.getData('selected'),
                checker = d.getElementById(id),
                p = checker.classList.contains('checker-red') ? -1 : 1,
                from = checker.parentNode.id,
                [r,c] = e.target.id.split('')
            if (
                (coord(r,c) || coord(r,c,1) ) && 
                ( empty(e.target) && move(from, e.target.id, p) ) &&
                ( true ) &&
                // Debe ser una celda
                isCell(e.target)                
            // Cambio de Posicion de la Ficha
            )   e.target.append(checker)
        }
})}

function board(){
    const table = Object.assign(d.createElement('table'), { 
        id: 'checkers-board',
        className: 'board-red'
    })
    const tbody = d.createElement('tbody');
    for (let row = 1; row <= 8; row++) {
        const tr = d.createElement('tr');
        for(let col = 1; col <= 8; col++){
            const td = createCell(row, col);
            tr.append(td)
        }
        tbody.append(tr)
    }
    table.append(tbody);
    return table;
}

export default board;