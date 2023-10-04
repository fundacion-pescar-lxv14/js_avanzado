/* Paradigma de Prototipos */
// Funcion Constructora (Contexto)
function Clock (HH,mm,ss){
    // Propiedades
    this.HH = HH;
    this.mm = mm;
    this.ss = ss;
}
// Metodos
Clock.prototype.showTime = function() {
    return (`${this.get('HH')}:${this.get('mm')}:${this.get('ss')}`)
}
Clock.prototype.get = function (key){
    return this[key] < 9 ? `0${this[key]}` : this[key]
}
Clock.prototype.addTime = function (key, max = 59) { 
    this[key] = (this[key] < max ? this[key] + 1 : 0)
}
Clock.prototype.remTime = function (key, max = 59) { 
    this[key] = (this[key] > 0 ? this[key] - 1 : max)
}

// Instancia
const timer = new Clock(2,59,40);
const cron = new Clock(0,0,0);
let interval;

function startTime(callback){
    interval = setInterval(callback, 1);
}
function stopTime(){
    clearInterval(interval)
}


function check(array, obj, condition){
    for (let item of array) if (obj[item] != condition) return false;
    return true
}

function Start({
    obj, 
    fn, 
    c = 0,
    next
    }){
    obj[fn]('ss');
    if (check(['ss'], obj, c)) obj[fn]('mm');
    if (check(['ss','mm'], obj, c)) obj[fn]('HH', 24);
    if (check(['ss','mm','HH'], obj, c)) stopTime();
    next
}
// 
startTime(() => Start({
    obj: cron,
    fn: 'addTime',
    next: console.log(cron.showTime())
}));

startTime(()=> Start({
    obj: timer, 
    fn: 'remTime', 
    c: 59,
    next: console.log(timer.showTime())
}));