const actividades = [
    "Completar actividad de JavaScript",
    "Estudiar Bootstrap",
    "Realizar ejercicio de HTML",
    "Revisar proyecto final"
];

// MOSTRAR LISTA DINÁMICA

function mostrarActividades() {

    const lista = document.getElementById("listaActividades");
    lista.innerHTML = "";

    actividades.forEach(function (actividad) {

        const elemento = document.createElement("li");

        elemento.classList.add(
            "list-group-item",
            "d-flex",
            "align-items-center"
        );

        elemento.textContent = actividad;
        lista.appendChild(elemento);

    });

    actualizarContador();
}

// ACTUALIZAR BADGE

function actualizarContador() {

    const contador = document.getElementById("contador");
    contador.textContent = actividades.length;
}

// FORMULARIO

const formulario = document.getElementById("formularioUsuario");

formulario.addEventListener("submit", function (event) {
    event.preventDefault();

    if (!formulario.checkValidity()) {
        event.stopPropagation();

    }

    formulario.classList.add("was-validated");

});

mostrarActividades();