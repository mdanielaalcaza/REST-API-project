/**
 * Js ejecuta el codigo en un solo proceso:
 * Si tenemos un proceso demaciado extenso, puedes detener todo
 * el flujo del programa.
 * Solucion:
 * ASINCRONISMO: permite delegar esos proceso extensos a subprocesos, 
 * que se encargue de cumplir con esa tarea, y volver a l proceso principal
 * = NOBLOQUEANTE: sigue ejecutandose el programa inicial
 */

/**
 * - Even loop: Es el encargado de ejecutar todas las 
 * tareas del software. Estas tareas, seran apiladas = Event queue (cola de eventos)
 * - Even loop estará ejecutandose todo el tiempo, y cuando detecta tareas grandes
 * las envia al THREAD POOL,mientras continua ejecutando las demas tareas del event queue.
 * - Even loop finaliza con las tareas, retoma al thread pool para vere si ya han sido cumplidas,
 * Si lo fueron, se mueven al Event queue, para que sean tomadas por el even loop y las finalice. 
 * - Even loop: se mantendra a la escucha de un nuevo programa.
 */


/**funcion setTimeout (): recibe dos parametros, uno funcion, y dos tiempo- que esperara 
para volver a ejecutar la function.
* EL tiempo se escribe en miles segundos= 2 segundos = 2000
*/


// Concurrente no Bloqueante
console.log('Tarea 1');
console.log('Tarea 2');
console.log('Tarea 3');
setTimeout(() => {
    console.log('Tarea 4');
}, 2000)
console.log('Tarea 5');






