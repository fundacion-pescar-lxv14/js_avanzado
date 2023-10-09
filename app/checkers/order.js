import { d } from '../global.js';
import { coord, empty } from "./conditions.js";

function order(){
    const chips = [
        {
            pieces: d.querySelectorAll('.box .checker-red'),
            ini: 1,
            fin: 3
        },
        { 
            pieces: d.querySelectorAll('.box .checker-black'),
            ini: 6,
            fin: 8
        }
    ];
    chips.map(({pieces, ini, fin}) => pieces.forEach((chip) => {
        for(let row = ini; row <= fin; row++)
        for(let col= 1; col <= 8; col++)
        if ((coord(row, col) || coord(row, col, 1))){
            const cell = d.getElementById(`${row}${col}`);
            if (empty(cell)) cell.append(chip);
        }
    } ) )
}

export default order;