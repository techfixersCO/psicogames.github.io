document.addEventListener('DOMContentLoaded', () => {
    // Verificar si el usuario está logueado y sus permisos
    const usuario = localStorage.getItem('usuario');
    const contenido = document.getElementById('contenido');
    const adminOptions = document.getElementById('admin-options');
    const limitedOptions = document.getElementById('limited-options');

    if (usuario) {
        // Mostrar las opciones según el tipo de usuario
        if (usuario === 'admin') {
            adminOptions.style.display = 'block'; // Admin tiene acceso completo
            cargarJuegos(); // Cargar los juegos
        } else {
            limitedOptions.style.display = 'block'; // Sebastián y Martha tienen acceso limitado
        }
    } else {
        alert('Debes iniciar sesión para acceder al panel de administración.');
        window.location.href = 'login.html';
    }
});

// Función para cargar los juegos desde el backend o archivo
function cargarJuegos() {
    const juegosLista = document.getElementById('juegos-lista');

    // Aquí se simula que se cargan los juegos desde un archivo o base de datos
    const juegos = [
        { nombre: "Cokitos", categoria: "niños", enlace: "https://www.cokitos.com/" },
        { nombre: "Vedoque", categoria: "niños", enlace: "https://www.vedoque.com/" },
        { nombre: "Kahoot", categoria: "grandes", enlace: "https://www.kahoot.com/" },
        { nombre: "Chess", categoria: "grandes", enlace: "https://www.chess.com/play/computer" },
    ];

    juegos.forEach(juego => {
        const juegoDiv = document.createElement('div');
        juegoDiv.innerHTML = `<h4>${juego.nombre}</h4><a href="${juego.enlace}" target="_blank">Jugar</a>`;
        juegosLista.appendChild(juegoDiv);
    });

    contenido.style.display = 'block';
}

// Funciones para agregar, eliminar y editar juegos (solo para el admin)
function agregarJuego() {
    const nombre = prompt('Nombre del juego:');
    const enlace = prompt('Enlace del juego:');
    const categoria = prompt('Categoría del juego (niños/grandes):');

    if (nombre && enlace && categoria) {
        // Lógica para agregar el juego (esto puede ser con AJAX o directamente al backend)
        alert('Juego agregado correctamente');
        cargarJuegos(); // Recargar la lista de juegos
    }
}

function eliminarJuego() {
    const nombre = prompt('Introduce el nombre del juego que deseas eliminar:');

    // Lógica para eliminar el juego (esto también puede ser con AJAX o directamente al backend)
    alert('Juego eliminado correctamente');
    cargarJuegos(); // Recargar la lista de juegos
}

function editarJuego() {
    const nombre = prompt('Introduce el nombre del juego que deseas editar:');
    const nuevoNombre = prompt('Nuevo nombre del juego:');
    const nuevoEnlace = prompt('Nuevo enlace del juego:');
    const nuevaCategoria = prompt('Nueva categoría del juego (niños/grandes):');

    if (nuevoNombre && nuevoEnlace && nuevaCategoria) {
        // Lógica para editar el juego (esto también puede ser con AJAX o directamente al backend)
        alert('Juego editado correctamente');
        cargarJuegos(); // Recargar la lista de juegos
    }
}
