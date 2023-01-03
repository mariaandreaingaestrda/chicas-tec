function datos() {
    var nombres = document.getElementById("nombres").value;

    var apellidos = document.getElementById("apellidos").value;

    var email = document.getElementById("email").value;

    var nacimiento = document.getElementById("fecha-nacimiento")

     var femenino = document.getElementById("f").checked;

    var masculino = document.getElementById("m").checked;

    var estatura = document.getElementById("estatura").value;

    var peso = document.getElementById("peso").value;

    var deporte = document.getElementById("deporte").value;

   var texto = "nombres " + nombres + "apellidos" + apellidos + "email" + email + "fecha-nacimiento" + fecha-nacimiento + "f" + femenino + "m" + masculino + "estatura" + estatura + "peso" + peso + "deporte" + deporte;
    console.log(texto);

    // var resultado= peso/(estatura**2);
    // var sobrepeso= resultado <=30;
    // var texto= "resultado" + resultado;
    // console.log(texto);
}