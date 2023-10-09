import { d } from '../global.js';

function checker({color, player, index}){
    return Object.assign( d.createElement('img') , {
        src: 'assets/icon/checker.svg',
        className: `checker-${color}`,
        id: `p${player}-${index}`,
        draggable: true,
        ondragstart: (e) => e.dataTransfer.setData('selected', e.target.id)
    } )
}

export default checker;