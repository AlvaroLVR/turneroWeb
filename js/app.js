//declaracion de variables globales 
let c = 0; 
let partnerSchedule = []; 
// Crear una Objeto los datos de los socios 
class Socio{
    constructor(nombre,apellido,dni,email,nSocio,nTurno){
        this.nombre = nombre.toUpperCase();
        this.apellido = apellido.toUpperCase();
        this.dni = parseFloat(dni);
        this.email = email.toUpperCase();
        this.nSocio = nSocio;          // si se parsea ignora los 0 por delante, ej 00990011 parseado = 990011. hay obras sociales que tiene como numero de socio el 00 por delante. 
        this.nTurno = nTurno;
        //this.fechaIng = fechaIng; Fecha de ingreso del turno 
    }
}
// toma los datos del socio 
function tomaDatos() {
    c++;  // contador el numero de turno del socio ingresado

    partnerSchedule.push(new Socio( document.getElementById("fname").value , document.getElementById("apellido").value , document.getElementById("dni").value , document.getElementById("email").value , document.getElementById("socio").value , c ));

    alert(document.getElementById("fname").value + ' ya esta registrado. Tenes el turno  ' +c )
}
