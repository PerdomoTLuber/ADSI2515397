/*
Memory heap
espacio de memoria no organizado
//
Call stack 
Entrega de tareas mediante las acciones de la ejecucción de la lista
Last-in, Farst-Out
====================================================================
ASYNCHRONOUS
//
Web Apis
Javascript:
DOM
AJAX
TimeOut
//
callback quenue 
Es la fila de las acciones a la hora de ejecutar 
//_____________________________________________//
MICRO TASK QUEUE
Promises
//
event loop
Un bucle de eventos
====================================================================

*/

$.on('button', 'click', function onClick() {
    setTimeout(function timer() {
        console.log('Mi click')
    }, 2000);
})

console.log('Hola');


setTimeout(function() {

}, timeout);