// funcion para cambiar el estado del botón en barra de navegación
function cambiarEstado() {
    var button = document.querySelector(".btn");
    if (button.innerHTML === "Iniciar sesión") {
        button.innerHTML = "Cerrar sesión";
    } else {
        button.innerHTML = "Iniciar sesión";
    }
}

// Función para contarLikes de contenedor2 - cantidadlikes2 

var likes = 9;

function contarLikes() {
    likes++;
    var likesElement = document.querySelector(".cantidadlikes2");
    likesElement.textContent = likes + " likes";
}

// Función para contarLikes de contenedor3 - cantidadlikes3

var likes = 12;

function contLikes() {
    likes++;
    var likesElement = document.querySelector(".cantidadlikes3");
    likesElement.textContent = likes + " likes";
}

// Función para contarLikes de contenedor4 - cantidadlikes4

var likes = 12;

function countLikes() {
    likes++;
    var likesElement = document.querySelector(".cantidadlikes4");
    likesElement.textContent = likes + " likes";
}
