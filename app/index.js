import Nav from './nav/index.js';
import Checkers from './checkers/index.js';
import Timer from './clock/index.js';
// IFFE (Inmediatly Invoker Function Expression)
(function () {
    Timer();
    Checkers();
    root.append(Nav());
})()