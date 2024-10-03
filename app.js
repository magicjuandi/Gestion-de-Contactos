const form = document.getElementById("form");
const nameField = form.getElements["nombre"];
const mailField = form.getElements["correo"];

form.addEventListener("submit", function(event){
    event.preventDefault();

    const email = document.getElementById("mail").value;
    const name = document.getElementById("name").value;
    if(!emailIsvalid(email)){
        alert("Ingresa un correo valido");
        return
    }
    form.submit();
});


