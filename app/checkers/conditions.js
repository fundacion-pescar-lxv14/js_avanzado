// El elemento debe ser una Celda
export const isCell = (element) => element.tagName === 'TD'
// Filas y columnas, ambas deben ser pares o impares
export const coord = (r,c, n = 0) => r % 2 == n && c % 2 == n
// La celda deber estar vacia
export const empty = (element) => element.children.length === 0
// La ficha se mueve en diagonal
export const move = (from, to, p = 1) => (from == (parseInt(to) + (11 * p)) || from == (parseInt(to) + (9 * p)))