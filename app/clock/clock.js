/* Paradigma de Prototipos */
function Clock (HH,mm,ss){
// Propiedades
    this.HH = HH;
    this.mm = mm;
    this.ss = ss;
}
/** Metodos del Prototipo */
// Getters
Clock.prototype.showTime = function() {
    return (`${this.get('HH')}:${this.get('mm')}:${this.get('ss')}`)
}
Clock.prototype.get = function (key){
    return this[key] <= 9 ? `0${this[key]}` : this[key]
}
// Setters
Clock.prototype.add = function (key, max = 59) { 
    this[key] = (this[key] < max ? this[key] + 1 : 0)
}
Clock.prototype.rem = function (key, max = 59) { 
    this[key] = (this[key] > 0 ? this[key] - 1 : max)
}
export default Clock;