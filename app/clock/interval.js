let interval;
function startTime(callback){ 
    interval = setInterval(callback, 1000);
}
function stopTime(){
    clearInterval(interval)
}
function check(array, obj, condition){
    for (let item of array) if (obj[item] != condition) return false;
    return true
}
function Start({ obj, fn, c = 0, next}){
    obj[fn]('ss');
    if (check(['ss'], obj, c)) obj[fn]('mm');
    if (check(['ss','mm'], obj, c)) obj[fn]('HH', 24);
    next
}
export { startTime, stopTime, Start }