let formulario = document.querySelector("#formularioRegister");
let email = document.querySelector("#registerMail");
let contrasena = document.querySelector("#registerContrasena");
let errorRegisterMail = document.querySelector(".errorRegisterMail");
let errorRegisterContrasena = document.querySelector(".errorRegisterContrasena");
let terminosCondiciones = document.querySelector(".terms");

email.addEventListener("input", function() {
    if (email.value !== "") {
        errorRegisterMail.style.display = "none";
    }
});

contrasena.addEventListener("input", function() {
    if (contrasena.value !== "") {
        errorRegisterContrasena.style.display = "none";
    }
});

formulario.addEventListener("submit", function (event) {
    event.preventDefault();
    let validado = true;

    if (email.value == "") {
        errorRegisterMail.style.display = "block";
        validado = false;
    }

    if (contrasena.value == "") {
        errorRegisterContrasena.style.display = "block";
        validado = false;
    }

    if (validado) {
        formulario.submit();
    }

});



