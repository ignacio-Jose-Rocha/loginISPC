function mostrar(e) {
    let inputNombre = document.getElementById('nombre');
    let inputCorreo = document.getElementById('email');
    let inputContra = document.getElementById('current-password');

    let local1 = inputNombre.value;
    let local2 = inputCorreo.value;
    let local3 = inputContra.value;
    let contrasenaValida = "ispc";
    let correo = "ispc@ispc.com.ar";
    let nombre = "ispc";

    if (local1 === nombre && local2 === correo && local3 === contrasenaValida) {

        swal('correcto', 'los datos son correctos', 'success');
        setTimeout(() => {
            window.location.href = "/exito.html";
        }, "500")

    }

    else {
        swal("error", "los datos no son correctos", "error");
        if (local1 === "" || local2 === "" || local3 === "") {
            swal("error", "los campos estan vacios", "error");
        }
    }
    document.getElementById("form").addEventListener('submit', (event) => {
        event.preventDefault();
    });

}

function registrar(e) {

    let nombre = document.getElementById('nombre');
    let apellido = document.getElementById('apellido');
    let correo = document.getElementById('email');
    let contrasena = document.getElementById('current-password');


    let local1 = nombre.value;
    let local2 = apellido.value;
    let local3 = correo.value;
    let local4 = contrasena.value;

    if (local1 !== "" && local2 !== "" && local3 !== "" && local4 !== "") {
        swal('success', 'se registro correctamente', 'success');
        setTimeout(() => {
            window.location.href = "/index.html";
        }, "500")
    }
    else {
        swal("error", "faltan datos por llenar", "error");

    }
    document.getElementById("form").addEventListener('submit', (event) => {
        event.preventDefault();
    });

}
