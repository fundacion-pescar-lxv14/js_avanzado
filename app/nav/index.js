import { d } from '../global.js';
import menu from './menu.json' assert { type: 'json' };

export const Link = ({text, url, className}) => Object.assign( d.createElement('a'),{
    className,
    innerText: text,
    href: '#' + url,
    onclick: (url) => { window[url]() }
})

function Nav (){
    const nav = d.createElement('nav');
    menu.map(item => nav.append(Link(item)));
    return nav
}

export default Nav;