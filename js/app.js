//declaracion de variables globales 
let registroSocio = [] ; 
let c = 0;
// Crear una clase constructora para tomar los datos de los socios 
class Socio{
    constructor(nombre,apellido,dni,email,nSocio){
        this.nombre = nombre;
        this.apellido = apellido;
        this.dni = dni;
        this.email = email;
        this.nSocio = nSocio;
    }
}
// toma los datos del socio 
function tomaDatos() {
    c++; 
    let dato1 = document.getElementById("fname").value;
    let dato2 = document.getElementById("apellido").value;
    let dato3 = document.getElementById("dni").value;
    let dato4 = document.getElementById("email").value;
    let dato5 = document.getElementById("socio").value;

    let registroSocio = new  Socio( dato1 , dato2 , dato3 , dato4 , dato5 );
    
    alert(registroSocio.nombre +' tenes el turno '+ c)
}

