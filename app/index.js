import Checkers from './checkers/index.js';
import RenderClock from './clock/index.js';
// IFFE (Inmediatly Invoker Function Expression)
(function () {
    RenderClock();
    Checkers();
})()