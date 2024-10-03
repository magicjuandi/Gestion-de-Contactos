const form = document.getElementById("form");
const nameField = form.getElements["nombre"];
const mailField = form.getElements["correo"];
//Funcion para el formulario de creacion de contactos
form.addEventListener("submit", function(event){
    event.preventDefault();
    const email = document.getElementById("mail").value;
    if(!emailIsvalid(email)){
        alert("Ingresa un correo valido");//Alerta que el correo sea valido
        return
    }
    form.submit();
});


