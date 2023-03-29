/**
 * CONTROL DE FLUJO
 * Para ver si una condicion se cumple dentro de un programa
 */

// Estructura IF : Evaluar si una condicion se cumple o no

//Estructura if(condicion) {}

var llueve = true;
if(llueve){
    console.log('Necesito un paraguas!');
}

var administrador = true;
if (administrador){
    console.log('Bienvenido al Sistema.');
}

var administrador = 'administrador';
if (administrador === 'administrador'){
    console.log('Bienvenido al Sistema.');
}


const MAYORIA_EDAD = 18;
var edadPersona = 18;

if(edadPersona>=MAYORIA_EDAD){
    console.log('Es mayor de edad.');
}else{
    console.log('Es menor de edad.');
};


var semaforo = 'azul';
if(semaforo === 'verde'){
    console.log('Go!');
} else if (semaforo === 'amarillo'){
    console.log('Ready?');
} else if(semaforo=== 'rojo'){
    console.log('Stop!');
} else{
    console.log('No existe color de semaforo!');
}
console.log(semaforo);


//Estrutura SWITCH: Ayuda a evaluar una expresion, según los casos de expresion.

// switch (expresion) { case expresion: codigo  + palabra reservada break;}
// break: finaliza la evaluacion de casos, se detiene. Sino estuviera continua evaluando.
//Opcion de descarte: default: ultimo caso a evaluar, por eso no requiere el break

var producto= 'TC Flota';
switch (producto){
    case 'TC AGRO':
        console.log('Cliente con precalificacion superior a $ 2.000.000,00.');
        break;
    case 'TC Business':
        console.log('Cliente con precalificacion inferior a $ 2.000.000,00.');
        break;
    case 'TC Recargable':
        console.log('Cliente puede extraer dinero por CA');
        break;
    case 'TC Flota':
        console.log('Cliente no puede extraer dinero por CA');
        break;
    default:
        console.log('Cliente no tiene oferta de productos');
}


/**
 * Ejercicios Control de Flujos
 */

//1.Escribir un programa que según el día de la semana ingresado proporcione el día en inglés.

var dia = 'hola';
if(dia === 'Lunes'){
    console.log('Monday');
} else if (dia === 'Martes'){
    console.log('Tuesday');
} else if(dia === 'Miercoles'){
    console.log('Wednesday');
}else if(dia === 'Jueves'){
    console.log('Thursday');
}else if(dia === 'Viernes'){
    console.log('Friday');
}else if(dia === 'Sabado'){
    console.log('Suturday');
}else if(dia === 'Domingo'){
    console.log('Sunday');
} else{
    console.log('Vives en otro planeta Amigo!');
}

var dia= 'Sabado';
switch (dia){
    case 'Lunes':
        console.log('Monday');
        break;
    case 'Martes':
        console.log('Tuesday');
        break;
    case 'Miercoles':
        console.log('Wednesday');
        break;
    case 'Jueves':
        console.log('Thursday');
        break;
    case 'Viernes':
        console.log('Friday');
        break;
    case 'Sabado':
        console.log('Saturday');
        break;
    case 'Domingo':
        console.log('Sunday');
        break;
        default:
        console.log('What planet do you live friend!?');
}

/**
 * 2.Escribir un programa que según el total de la compra, se agregue un valor de envio.

Si la compra es menor o igual a los $10 se agregará un gasto de envió de $3

Si la compra es menor o igual a los $20 y mayor a los $10 se agregará un gasto de envío de $5

Si la compra es menor o igual a los $50 y mayor a los $20 se agregará un gasto de envío de $7

Si la compra supera los $50 el gasto de envío será gratuito
 */


var compra = 21;
if(compra<=10){
    console.log(compra + 3);
}else if (compra<=20 && compra>10){
    console.log( compra + 5);
}else if (compra<=50 && compra>20){
    console.log(compra + 7);
}else if(compra>50) {
    console.log('Total de la compra es $' + '' + compra + '.'+ ''+ 'El gasto de envío es gratis.');
};

var compra = 23;
switch (compra){
    case compra <= 10:
        console.log(compra + 3);
        break;
    case compra<=20 && compra>10:
        console.log(compra + 5);
        break;
    case compra<=50 && compra>20:
        console.log(compra + 7);
        break;
    case compra>50:
        console.log('Total de la compra es $' + '' + compra + '.'+ ''+ 'El gasto de envío es gratis.');
        break;
}

// Consultar como son las expresiones en un switch cuando las condiciones son aritmeticas. 

