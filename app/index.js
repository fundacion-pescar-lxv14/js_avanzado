import Checkers from './checkers/index.js';
import RenderClock from './timer.js';
// IFFE (Inmediatly Invoker Function Expression)
(function () {
    RenderClock();
    Checkers();
})()