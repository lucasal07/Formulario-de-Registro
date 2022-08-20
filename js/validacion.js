// Lucas Alonzo, Maglis Galván, Juan San Pedro//


function showAlertSuccess() {
    document.getElementById("alert-success").classList.add("show");
}

function showAlertError() {
    document.getElementById("alert-danger").classList.add("show");
}

function requirement() {
    var nombre = document.getElementById("nombre").value;
    var apellido = document.getElementById("apellido").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password1").value;
    var password1 = document.getElementById("password2").value;
   
    
   if ((nombre.length  || apellido.length || email.length) == 0 ){
        showAlertError()
    } else if (password.length <= 5){
        showAlertError()
    } else if (password !== password1) {
        showAlertError()
    }else if(document.getElementById("terminos").checked === false){
        showAlertError()
    }
    else {
       showAlertSuccess();
       buttonClose = document.getElementById("ButtonClose");
       buttonClose.addEventListener("click",function(){
        location.href = "index.html";
       })
       
    }
    
}  


const registrarme = document.getElementById("regBtn");

registrarme.addEventListener( "click", function(){
            requirement();
});

