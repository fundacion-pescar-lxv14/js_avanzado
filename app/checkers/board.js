import { d } from '../global.js';
import { 
    coord,
    empty, 
    isCell,
} from './conditions.js';

function createCell(row, col){
    return Object.assign(d.createElement('td'), {
        id: `${row}${col}`,
        ondragover:(e) => e.preventDefault(),
        ondrop: (e) => {
            const id = e.dataTransfer.getData('selected'),
                [r,c] = e.target.id.split('')
            if ((
                // filas y columnas pares (22, 24, 26, 28)
                coord(r,c) || 
                // filas y columnas impares (11, 13, 15, 17) 
                coord(r,c,1) ) && 
                // La celda no debe tener hijos
                empty(e.target) &&
                // Debe ser una celda
                isCell(e.target)
            // Cambio de Posicion de la Ficha
            )   e.target.append(d.getElementById(id))
        }
})}

function board(){
    const table = Object.assign(d.createElement('table'), { className: 'board-red'})
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