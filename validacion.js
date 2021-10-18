//seleccionar el formulario con id

//var formulario = document.getElementsByTagName("form");

window.onload = iniciar;

function iniciar(){
   document.getElementById("enviar").addEventListener('click', validar, false);
}

function validarNombre(){
    var elemento = document.getElementById("nombre");
    if (elemento.value == ""){
        alert("Ingresar un nombre.");
        return false;
    }
    return true;
}

function validarApellido(){
    var elemento = document.getElementById("apellido");
    if (elemento.value == ""){
        alert("Ingresar un apellido.");
        return false;
    }
    return true;
}

function validarTelefono(){
    var elemento = document.getElementById("telefono");
    if (elemento.value == ""){
        alert("Ingresar un número de teléfono.");
        return false;
    }

    if (isNaN(elemento.value)){
        alert("Debe ingresar un valor numérico");
        return false;
    }
    return true;
}

function validar(e){
    if(validarNombre() && validarApellido() && validarTelefono && confirm("Pulsa aceptar para enviar el formulario")){
        return true;
    }else{
        e.preventDefault();
        return false;
    }
}