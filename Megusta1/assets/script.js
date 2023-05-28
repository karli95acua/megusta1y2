
function cambiarEstado() {
    var button = document.querySelector(".btn");
    if (button.innerHTML === "Iniciar sesión") {
        button.innerHTML = "Cerrar sesión";
    } else {
        button.innerHTML = "Iniciar sesión";
    }
}

var likes = 3;

function contarLikes() {
    likes++;
    var likesElement = document.querySelector(".cantidadlikes");
    likesElement.textContent = likes + " likes";
}

