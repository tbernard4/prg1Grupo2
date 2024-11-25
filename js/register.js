let formulario = document.querySelector("#formularioRegister");
let email = document.querySelector("#registerMail");
let contraseña = document.querySelector("#registerContraseña");
let errorRegisterMail = document.querySelector(".errorRegisterMail");
let errorRegisterContraseña = document.querySelector(".errorRegisterContraseña");
let terminosCondiciones = document.querySelector(".terms");

email.addEventListener("input", function() {
    if (email.value !== "") {
        errorRegisterMail.style.display = "none";
    }
});

contraseña.addEventListener("input", function() {
    if (contraseña.value !== "") {
        errorRegisterContraseña.style.display = "none";
    }
});

formulario.addEventListener("submit", function (event) {
    event.preventDefault();
    let validado = true;

    if (email.value == "") {
        errorRegisterMail.style.display = "block";
        validado = false;
    }

    if (contraseña.value == "") {
        errorRegisterContraseña.style.display = "block";
        validado = false;
    }

    if (validado) {
        formulario.submit();
    }

});


let checkbox = document.querySelector('.terms'); 
let button = document.querySelector('#registerButton'); 

button.addEventListener('click', function (event) {
    if (!checkbox.checked) { 
        event.preventDefault(); 
        alert('Debes aceptar los términos y condiciones antes de enviar.');
    } else {
        alert('¡Formulario enviado con éxito!');
    }
});
