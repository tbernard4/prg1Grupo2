

let formulario = document.querySelector("#formularioLogin")
let email = document.querySelector("#loginEmail")
let contraseña = document.querySelector("#loginPassword")




formulario.addEventListener("submit", function(event){
    event.preventDefault();
    let validado = true
    if (email.value == ""){
        alert("Por favor complete el campo Email")
        validado = false
    }
    if (contraseña.value == ""){
        alert("Por favor complete el campo contraseña")
        validado = false
    }
    if (validado){
        formulario.submit()
    }
})