/////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// FUNCIONALIDADES PARA AGREGAR

//  - comprobante: darle un comprobante del turno al usuario con un codigo para que pueda presentarlo el dia que se le fue asignado.

//  - calendario: agregar un calendario que indique los dias disponibles para el turno 

//  - verificar la entrada de datos

//  - recordatorios: enviar un emial y whatasapp recordatorio del turno,  dia antes del mismo.

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                         codigo sin usar getElementById                                         //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// let partnerSchedule = [];  // array de socios  dejarlo por fuera del while para que no se pise y vuelva a valor 0 

// while (true) {
//     // tomando datos 
//     let nombre = prompt('ingrese su Nombre');
//     let apellido = prompt('ingrese su Apellido'); 
//     let dni = prompt('ingrese su DNI');
//     let email = prompt('ingrese su email');
//     let numSocio = prompt('ingrese su numero de socio');

//     //creo la clse Socio con sus propiedades 
//     class Socio{
//         constructor(nombre,apellido,dni,email,nSocio){
//             this.nombre = nombre.toUpperCase();
//             this.apellido = apellido.toUpperCase();
//             this.dni = parseFloat(dni);
//             this.email = email.toUpperCase();
//             this.nSocio = nSocio;// si se parsea ignora los 0 por delante, ej 00990011 parseado = 990011. hay obras sociales que tiene como numero de socio el 00 por delante. 
//             // this.nTurno = nTurno;
//             //this.fechaIng = fechaIng; Fecha de ingreso del turno 
//         }
//     }

//     //guardar los socios en un array 

//     partnerSchedule.push( new Socio(nombre, apellido,dni, email,numSocio) );

//     // mostrar el nombre del socio e informarle que numero de turno tiene. 

//     alert(nombre + ' ya estas registrado. Tenes el turno  '+ partnerSchedule.length);  // provisoriamente uso el length del array de socios para saber el numero de turno, mas adelante tendré que ver como saberlo si muchos usuarios se estan registrando y darles el numero correcto del turno. 
// }

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                      codigo usando getElementById                                             //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// declaracion de variables globales 
let c = 0; 
// Crear un Objeto con los datos de los socios 
class Socio{
    constructor(nombre,apellido,dni,email,nSocio,nTurno,fechaTur){
        this.nombre = nombre.toUpperCase();
        this.apellido = apellido.toUpperCase();
        this.dni = parseFloat(dni);
        this.email = email.toUpperCase();
        this.nSocio = nSocio;// si se parsea ignora los 0 por delante, ej 00990011 parseado = 990011. hay obras sociales que tiene como numero de socio el 00 por delante. 
        this.nTurno = nTurno;
        this.fechaTur = fechaTur; // Fecha del del turno. dependiendo la fecha disponible
    }
}

// tomar los datos del socio y los guardo en un array partnerSchedule AGENDA DE SOCIOS 

function tomaDatos(){ 
    let partnerSchedule = []; 
    c++;  // contador el numero de turno del socio ingresado

    partnerSchedule.push(new Socio( document.getElementById("fname").value , document.getElementById("apellido").value , document.getElementById("dni").value , document.getElementById("email").value , document.getElementById("socio").value , c )); //guarda los datos en las propiedades del objeto Socio y se pushean en el array partnerSchedule
    alert(document.getElementById("fname").value + ' ya estas registrado. Tenes el turno  ' + c )
    
    return partnerSchedule
}

// - comprobante: darle un comprobante del turno al usuario con un codigo para el dia que se le fue asignado. agregar al HTML un div con una leyenda. 

function comprobante() {
    let imprimir = document.createElement("div")
    imprimir.innerHTML = `<h2><b>Tu solicitud fue enviada con Éxito</b></h2>   
                            <p>${document.getElementById("fname").value}! gracias por utilizar el servicio de turnos Online</p><br>
                            <p>Recorda asistir el día del turno con tu carnet de afiliado</p>
                            <p>En el caso que no pueda asistir por favor informar con anticipación.</p>`
                            console.log(imprimir);            
    document.getElementById('prueba').append(imprimir);  //enviamos el contenido que esta en imprimir a la etiqueta con id=prueba
    
}
