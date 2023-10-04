import Clock from './clock.js';
import { startTime, Start } from './interval.js'

// Instancia
const timer = new Clock(2,59,40);
const cron = new Clock(0,0,0);

startTime(() => Start({
    obj: cron,
    fn: 'add',
    next: console.log(cron.showTime())
}));

startTime(()=> Start({
    obj: timer, 
    fn: 'rem', 
    c: 59,
    next: console.log(timer.showTime())
}));