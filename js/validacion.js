function showAlertSuccess() {
    document.getElementById("alert-success").classList.add("show");
}

function showAlertError() {
    document.getElementById("alert-danger").classList.add("show");
}


function requirement () {
    var nombre = document.getElementById("nombre").value
    var apellido = document.getElementById("apellido").value
    var email = document.getElementById("email").value
    var password = document.getElementById("password1").value
    var password1 = document.getElementById("password2").value

    if ((nombre.length  || apellido.length || email.length) == 0 ){
        showAlertError()
    } else if (password.length <= 5){
        showAlertError()
    } else if (password !== password1) {
        showAlertError()
    }
    else {
       showAlertSuccess()
    }
}  

const registro = document.getElementById("regBtn") 
registro.addEventListener ( "click", requirement)



