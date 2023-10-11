import Nav from './nav/index.js';
import Checkers from './checkers/index.js';
import Timer from './clock/index.js';
import BlackJack from './blackjack/index.js';
// IFFE (Inmediatly Invoker Function Expression)
(function () {
    root.append(Nav());
    Timer();
    Checkers();
    BlackJack();
})()