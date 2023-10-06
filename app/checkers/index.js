import { d, root } from '../global.js';
const colors = ['red', 'black'];

function checker({color, player, index}){
    return Object.assign( d.createElement('img') , {
        src: 'assets/icon/checker.svg',
        className: `checker-${color}`,
        id: `p${player}-${index}`,
        draggable: true,
        ondragstart: (e) => e.dataTransfer.setData('selected', e.target.id)
    } )
}

function box(){
    const box = Object.assign(d.createElement('div'), {
        className: 'box'
    })
    colors.forEach( (color, i) => { 
        const player = i + 1;
        for(let index = 1; index <= 12; index++){
            box.append(checker({color, player, index}))
        }
    } )
    return box;
}

function board(){
    const table = Object.assign(d.createElement('table'), { className: 'board-red'})
    const tbody = d.createElement('tbody');
    for (let row = 1; row <= 8; row++) {
        const tr = d.createElement('tr');
        for(let cel = 1; cel <= 8; cel++){
            const td = Object.assign(d.createElement('td'), {
                id: `${row}-${cel}`,
                ondragover:(e) => e.preventDefault(),
                ondrop: (e) => {
                    const id = e.dataTransfer.getData('selected'),
                        [r,c] = td.id.split('-')
                    if( // filas y columnas pares (22, 24, 26, 28)
                        r % 2 == 0 && c % 2 == 0 ||
                        // filas y columnas impares (11, 13, 15, 17) 
                        r % 2 == 1 && c % 2 == 1 )   
                    // Cambio de Posicion de la Ficha
                    td.append(d.getElementById(id))
                }
            });
            tr.append(td)
        }
        tbody.append(tr)
    }
    table.append(tbody);
    return table;
}

function Checkers(){
    const section = Object.assign(d.createElement('section'), {className: "d-grid"});
    section.append(
        board(),
        box(),
    );
    root.append(section);
}

export default Checkers;